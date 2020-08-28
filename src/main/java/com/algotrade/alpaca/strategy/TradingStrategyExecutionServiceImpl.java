package com.algotrade.alpaca.strategy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.ta4j.core.BarSeries;

import com.algotrade.alpaca.data.pojo.TradeOrder;
import com.algotrade.alpaca.data.pojo.TradeOrderResponse;
import com.algotrade.alpaca.data.repository.TradeStrategyRepo;
import com.algotrade.alpaca.data.rest.client.TradingService;
import com.algotrade.alpaca.service.TradingCircuitBreakerI;
import com.algotrade.alpaca.strategy.exception.TradeStrategyExecutionException;
import com.algotrade.alpaca.strategy.exception.TradeStrategyExecutionInterruption;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.StockWatch;
import com.algotrade.alpaca.strategy.pojo.TradeStrategyState;
import com.algotrade.alpaca.strategy.util.TradingStrategyUtil;

/*
 * This Class is core of the application and does the below operation.
 * 1. scan for any change or new strategy as per schedule (Refer scheduleTradingStrategy() method)
 * 2. Execute Strategy as per intended schedule 
 * 
 */
@Component
public class TradingStrategyExecutionServiceImpl implements TradingStrategyExecutionServiceI {

	private static final Logger logger = LoggerFactory.getLogger(TradingStrategyExecutionServiceImpl.class);


	private ScheduledExecutorService tradeScheduledThreadPool = Executors.newScheduledThreadPool(20);

	private ScheduledExecutorService mainScheduledThreadPool = Executors.newScheduledThreadPool(20);


	@Autowired
	private TradeStrategyRepo tradeStrategyRepo;

	@Autowired
	private TradingService tradingService;

	
	@Autowired 
	private ConcurrentHashMap<String, String> pendingOrderRegistry;
	
	
	@Autowired
	private TradingCircuitBreakerI tradingCircuitBreakerI;
	
	private HashSet<StockTradeStrategy> currentStrategyRegistry = new HashSet<>();

	private String scriptTemplete = TradingStrategyUtil.getTradingScriptTemplateString();
	private final String endBracket = "}";

	
	// Scheduler configuration to scan for strategy
	
	// Every Five minutes scan for new Strategies
	@Scheduled(fixedDelay = 300000)
	
	// Below configuration can be used to scan for strategy from 9am to 5pm every day for every five min
	// fron Monday to Friday
	//@Scheduled(cron="0 0/5 9-17 ? * MON-FRI")	
	public void scheduleTradingStrategy() {
		
		Stream<StockTradeStrategy> stockTradeStrategies = tradeStrategyRepo.getAllStrategies();

		stockTradeStrategies.forEach(stockTradeStrategy -> {
			
					if(!currentStrategyRegistry.contains(stockTradeStrategy)){
						
						currentStrategyRegistry.add(stockTradeStrategy);
						Runnable entryCommand = getEntryRunnable(stockTradeStrategy.getTicker());
						tradeScheduledThreadPool.scheduleWithFixedDelay(entryCommand, 0, stockTradeStrategy.getInterval(),
								TimeUnit.valueOf(stockTradeStrategy.getTimeUnit()));
						
						Runnable exitCommand = getExitRunnable(stockTradeStrategy.getTicker());
						tradeScheduledThreadPool.scheduleWithFixedDelay(exitCommand, 0, stockTradeStrategy.getInterval(),
								TimeUnit.valueOf(stockTradeStrategy.getTimeUnit()));
						
					}

		});
		
	}

	//@Scheduled(cron = "0 1 17 ? * MON-FRI")
	public void stopScheduler() {
		tradeScheduledThreadPool.shutdownNow();
	}

	private Runnable getEntryRunnable(String ticker) {
		Runnable command = new Runnable() {

			@Override
			public void run() {
				try {
					StockTradeStrategy stockTradeStrategy = tradeStrategyRepo.getStrategy(ticker);
					if (stockTradeStrategy != null) {
						if (stockTradeStrategy.getState().equals(TradeStrategyState.WATCHING)) {
							StockWatch stockWatch = stockTradeStrategy.getStockWatch();
							BarSeries barSeries = getBarSeriesForGivenDuration(stockTradeStrategy.getTicker(),
									stockTradeStrategy.getCandleCount(), stockTradeStrategy.getIntervalDuration());
							
							if (barSeries != null) {
								Boolean isTradingRuleSucceeds = executeTradingRule(
										stockTradeStrategy.getTradeStrategy().getEntryConditions(), barSeries,
										stockWatch);
								if (isTradingRuleSucceeds && tradingCircuitBreakerI.allowedToEnterTrade()) {
									logger.info(stockTradeStrategy.getTradeStrategy().getEntrySignal()
											+ " order is requested!");
									stockTradeStrategy.setState(TradeStrategyState.ENTRY_ORDER_PENDING);
									TradeOrder tradeOrder = new TradeOrder();
									tradeOrder.setQuantity(stockTradeStrategy.getQuantity());
									tradeOrder.setTicker(stockTradeStrategy.getTicker());
									if (stockTradeStrategy.getTradeStrategy().getEntrySignal()
											.equalsIgnoreCase("buy")) {
										TradeOrderResponse orderResponse = tradingService.buyStock(tradeOrder);
										pendingOrderRegistry.put(orderResponse.getId(),orderResponse.getStatus());
									} else {
										TradeOrderResponse orderResponse = tradingService.sellStock(tradeOrder);
										pendingOrderRegistry.put(orderResponse.getId(),orderResponse.getStatus());

									}
								}
								tradeStrategyRepo.saveStrategy(stockTradeStrategy);
							}
						}
					} else {
						currentStrategyRegistry.remove(stockTradeStrategy);
						throw new TradeStrategyExecutionInterruption("Strategy not found for Ticker"+ticker);
					}
				} catch (Exception ex) {
					logger.error("Exception happened while trying to process Entry strategy for " + ticker
							+ " and exception is=", ex);
					if (ex instanceof TradeStrategyExecutionInterruption) {
						throw ex;
					}
				}
			}

		};
		return command;
	}

	private Runnable getExitRunnable(String ticker) {
		Runnable command = new Runnable() {

			@Override
			public void run() {
				try {
					StockTradeStrategy stockTradeStrategy = tradeStrategyRepo.getStrategy(ticker);
					if(stockTradeStrategy != null){
					if (stockTradeStrategy.getState().equals(TradeStrategyState.ENTERED)) {
						StockWatch stockWatch = stockTradeStrategy.getStockWatch();
						String unrealizedProfitPercentage = tradingService.getOpenPositionBySymbol(ticker)
								.getUnrealizedPlpc();

						stockWatch.setProfitPercentage(Double.parseDouble(unrealizedProfitPercentage)*100);

						BarSeries barSeries = getBarSeriesForGivenDuration(stockTradeStrategy.getTicker(),
								stockTradeStrategy.getCandleCount(), stockTradeStrategy.getIntervalDuration());
						if (barSeries != null) {
							Boolean isTradingRuleSucceeds = executeTradingRule(
									stockTradeStrategy.getTradeStrategy().getExitConditions(), barSeries, stockWatch);
							if (isTradingRuleSucceeds) {
								logger.info(
										stockTradeStrategy.getTradeStrategy().getExitSignal() + " order is requested!");
								stockTradeStrategy.setState(TradeStrategyState.EXIT_ORDER_PENDING);
								TradeOrder tradeOrder = new TradeOrder();
								tradeOrder.setQuantity(stockTradeStrategy.getQuantity());
								tradeOrder.setTicker(stockTradeStrategy.getTicker());
								if (stockTradeStrategy.getTradeStrategy().getExitSignal().equalsIgnoreCase("buy")) {
									TradeOrderResponse orderResponse = tradingService.buyStock(tradeOrder);
									pendingOrderRegistry.put(orderResponse.getId(),orderResponse.getStatus());
								} else {
									TradeOrderResponse orderResponse = tradingService.sellStock(tradeOrder);
									pendingOrderRegistry.put(orderResponse.getId(),orderResponse.getStatus());

								}
							}
							tradeStrategyRepo.saveStrategy(stockTradeStrategy);
						}
					}
					} else {
							currentStrategyRegistry.remove(stockTradeStrategy);
							throw new TradeStrategyExecutionInterruption("Strategy not found for Ticker"+ticker);
						}
				} catch (Exception ex) {
					logger.error("Exception happened while trying to process Exit strategy for " + ticker
							+ " and exception is=", ex);
					if (ex instanceof TradeStrategyExecutionInterruption) {
						throw ex;
					}
				}

			}
		};
		return command;
	}

	private BarSeries getBarSeriesForGivenDuration(String ticker, Integer candleCount, String candleDuration) {
		return tradingService.getMarketDataForGivenDuration(ticker, candleDuration, candleCount);

	}


	
	private Boolean executeTradingRule(String tradingRule, BarSeries barSeries, StockWatch stockWatch) {
		String jsScript = scriptTemplete + tradingRule + endBracket;
		try {
		    ScriptEngineManager factory = new ScriptEngineManager();
		    ScriptEngine engine = factory.getEngineByName("nashorn");
			engine.eval(jsScript);
			Object obj = engine.get("obj");
			// create an Invocable object by casting the script engine object
			Invocable inv = (Invocable) engine;
			Integer lastIndex = barSeries.getEndIndex();
			Boolean executeTrade = (Boolean) inv.invokeMethod(obj, "tradingRule", barSeries, lastIndex, stockWatch);
			return executeTrade;
		} catch (ScriptException | NoSuchMethodException e) {

			logger.error("Exception happened while executing strategy script =" + jsScript + "  and exception is=", e);
			throw new TradeStrategyExecutionException(e.getMessage());
		}

	}

}
