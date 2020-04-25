package com.algotrade.alpaca.strategy;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;
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
import com.algotrade.alpaca.data.repository.TradeStrategyRepo;
import com.algotrade.alpaca.data.service.MarketDataService;
import com.algotrade.alpaca.service.PortfolioServiceI;
import com.algotrade.alpaca.service.TradingServiceI;
import com.algotrade.alpaca.strategy.exception.TradeStrategyExecutionException;
import com.algotrade.alpaca.strategy.exception.TradeStrategyExecutionInterruption;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.StockWatch;
import com.algotrade.alpaca.strategy.pojo.TradeStrategyState;

@Component
public class TradingStrategyExecutionServiceImpl implements TradingStrategyExecutionServiceI {

	private static final Logger logger = LoggerFactory.getLogger(TradingStrategyExecutionServiceImpl.class);

	private ScheduledExecutorService tradeScheduledThreadPool = Executors.newScheduledThreadPool(20);

	private ScheduledExecutorService mainScheduledThreadPool = Executors.newScheduledThreadPool(20);

	@Autowired
	private TradeStrategyRepo tradeStrategyRepo;

	private ScriptEngine engine;

	@Autowired
	private TradingServiceI tradingService;

	@Autowired
	private PortfolioServiceI portfolioService;

	@Autowired
	private MarketDataService marketDataService;

	private HashSet<StockTradeStrategy> currentStrategyRegistry = new HashSet<>();

	private String scriptTemplete = " var obj = new Object();\n" + " var ta4jCorePackage = new JavaImporter( "
			+ getTa4jPackagesList() + ");\n" + " with(ta4jCorePackage) {\n" + "   obj.tradingRule = ";
	private final String endBracket = "}";

	public void executeStrategies() {
		mainScheduledThreadPool.scheduleAtFixedRate(() -> {
			scheduleTradingStrategy();
		}, 0, 1, TimeUnit.MINUTES);
	}

	// Every Five minutes scan for new Strategies
	@Scheduled(fixedDelay = 300000)
	// @Scheduled(cron="0 0/5 9-17 ? * MON-SAT")
	public void scheduleTradingStrategy() {
		Stream<StockTradeStrategy> stockTradeStrategies = tradeStrategyRepo.getAllStrategies();

		stockTradeStrategies.forEach(stockTradeStrategy -> {
			currentStrategyRegistry.add(stockTradeStrategy);
		});
		
//		try {
//			if(tradeScheduledThreadPool.awaitTermination(1, TimeUnit.MINUTES)){
				currentStrategyRegistry.forEach(stockTradeStrategy -> {
					Runnable entryCommand = getEntryRunnable(stockTradeStrategy.getTicker());
					tradeScheduledThreadPool.scheduleWithFixedDelay(entryCommand, 0, stockTradeStrategy.getInterval(),
							TimeUnit.valueOf(stockTradeStrategy.getTimeUnit()));
					Runnable exitCommand = getExitRunnable(stockTradeStrategy.getTicker());
					tradeScheduledThreadPool.scheduleWithFixedDelay(exitCommand, 0, stockTradeStrategy.getInterval(),
							TimeUnit.valueOf(stockTradeStrategy.getTimeUnit()));
				});
//			}
//		} catch (InterruptedException e) {
//			throw new TradeStrategyExecutionException(e.getMessage());
//		}



	}

	@Scheduled(cron = "0 1 17 ? * MON-FRI")
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
								if (isTradingRuleSucceeds) {
									logger.info(stockTradeStrategy.getTradeStrategy().getEntrySignal()
											+ " order is requested!");
									stockTradeStrategy.setState(TradeStrategyState.ENTRY_ORDER_PENDING);
									TradeOrder tradeOrder = new TradeOrder();
									tradeOrder.setQuantity(stockTradeStrategy.getQuantity());
									tradeOrder.setTicker(stockTradeStrategy.getTicker());
									if (stockTradeStrategy.getTradeStrategy().getEntrySignal()
											.equalsIgnoreCase("buy")) {
										tradingService.buyStock(tradeOrder);
									} else {
										tradingService.sellStock(tradeOrder);
									}
								}
								tradeStrategyRepo.saveStrategy(stockTradeStrategy);
							}
						}
					} else {
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
					if (stockTradeStrategy.getState().equals(TradeStrategyState.ENTERED)) {
						StockWatch stockWatch = stockTradeStrategy.getStockWatch();
						String unrealizedProfitPercentage = portfolioService.getOpenPosition(ticker)
								.getUnrealizedPlpc();
						stockWatch.setProfitPercentage(Double.parseDouble(unrealizedProfitPercentage));

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
									tradingService.buyStock(tradeOrder);
								} else {
									tradingService.sellStock(tradeOrder);
								}
							}
							tradeStrategyRepo.saveStrategy(stockTradeStrategy);
						}
					}
				} catch (Exception ex) {
					logger.error("Exception happened while trying to process Exit strategy for " + ticker
							+ " and exception is=", ex);
				}

			}
		};
		return command;
	}

	private BarSeries getBarSeriesForGivenDuration(String ticker, Integer candleCount, String candleDuration) {
		return marketDataService.getCurrentMarketData(ticker, candleDuration, candleCount);
	}

	@PostConstruct
	private void configureJSEngine() {
		ScriptEngineManager factory = new ScriptEngineManager();
		this.engine = factory.getEngineByName("JavaScript");
	}

	private String getTa4jPackagesList() {

		try {
			URI uri = TradingStrategyExecutionServiceImpl.class.getResource("/meta/StrategyPackagesList.txt").toURI();
			// URI uri = new
			// URI("file:///Users/sriram/Documents/Study/Projects/Algo/AlgoTradeWithAlpaca/src/main/resources/meta/StrategyPackagesList.txt");
			List<String> lines = Files.readAllLines(Paths.get(uri));
			StringBuilder packagesNames = new StringBuilder();
			for (String line : lines) {
				packagesNames.append(line);
				packagesNames.append(",");
			}
			if (packagesNames.length() > 0) {
				packagesNames.deleteCharAt(packagesNames.length() - 1);
			}
			return packagesNames.toString();
		} catch (IOException | URISyntaxException e) {
			logger.error("Exception happend while trying to read package meta data ", e);
			return "";
		}

	}

	private Boolean executeTradingRule(String tradingRule, BarSeries barSeries, StockWatch stockWatch) {
		String jsScript = scriptTemplete + tradingRule + endBracket;
		logger.info("Executing Trading Rule=" + jsScript);
		try {
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
