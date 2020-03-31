package com.algotrade.alpaca.strategy;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;
import javax.annotation.PostConstruct;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.algotrade.alpaca.data.pojo.StockMarketData;
import com.algotrade.alpaca.data.polygon.pojo.RecentTradeData;
import com.algotrade.alpaca.data.repository.TradeStrategyRepo;
import com.algotrade.alpaca.data.rest.client.MarketDataClient;
import com.algotrade.alpaca.strategy.exception.TradeStrategyExecutionException;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.StockWatch;
import com.algotrade.alpaca.strategy.pojo.TradeStrategy;
import com.algotrade.alpaca.strategy.pojo.TradeStrategyState;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class TradingStrategyExecutionServiceImpl implements TradingStrategyExecutionServiceI {
	
	private static final Logger logger = LoggerFactory.getLogger(TradingStrategyExecutionServiceImpl.class); 
	
	private ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(5);
	
	@Autowired
	private TradeStrategyRepo tradeStrategyRepo;
	
	@Autowired
	private MarketDataClient polygonMarketDataClient;
	
	private  ScriptEngine engine;
	
	@Autowired
	private ObjectMapper objectMapper;


	
	public void executeStrategies(){

		Stream<StockTradeStrategy> stockTradeStrategies  = tradeStrategyRepo.getAllStrategies();

		stockTradeStrategies.forEach(stockTradeStrategy -> {
			if(stockTradeStrategy.getState().equals(TradeStrategyState.WATCHING)){
				Runnable command = getEntryRunnable(stockTradeStrategy);
				scheduledThreadPool.scheduleWithFixedDelay(command, 0, stockTradeStrategy.getInterval(), TimeUnit.valueOf(stockTradeStrategy.getTimeUnit()));
			}
			if(stockTradeStrategy.getState().equals(TradeStrategyState.ENTERED)){
				Runnable command = getExitRunnable(stockTradeStrategy);
				scheduledThreadPool.scheduleWithFixedDelay(command, 0, stockTradeStrategy.getInterval(), TimeUnit.valueOf(stockTradeStrategy.getTimeUnit()));
				}
			
		});	
		
	}
	
	private String executeStrategyJSScripts(String jsCondition) throws TradeStrategyExecutionException{
		String response = null;
		try {
			response = (String) engine.eval(jsCondition);
		} catch (ScriptException e) {
			logger.error("Error happened while executing the Strategy script = "+jsCondition);
			throw new TradeStrategyExecutionException("Error happened while executing the Strategy script");
		}
		 return response;
	}
	
	private String getCurrentMarketDataAsString(String ticker) throws JsonProcessingException{
		RecentTradeData recentTradeData = polygonMarketDataClient.getRecentMarketData(ticker);
		StockMarketData stockMarketData = new StockMarketData();
		stockMarketData.setCurrentPrice(recentTradeData.getLast().getPrice());
		return objectMapper.writeValueAsString(stockMarketData);
	}
	
	private String getStockWatchAsString(StockWatch stockWatch) throws JsonProcessingException {
		return objectMapper.writeValueAsString(stockWatch);

	}
	
	private StockWatch getStockWatchAsObject(String stockWatchAsString) throws JsonProcessingException {
		return objectMapper.readValue(stockWatchAsString, StockWatch.class);

	}
	
	private Runnable getEntryRunnable(StockTradeStrategy stockTradeStrategy){
		Runnable command = new Runnable(){

			@Override
			public void run() {
				try{
					String stockMarketData = "var stockMarketData = " + getCurrentMarketDataAsString(stockTradeStrategy.getTicker()) + " \n";
					String stockWatch = "var stockWatch = "  + getStockWatchAsString(stockTradeStrategy.getStockWatch()) + " \n";
					StringBuilder builder = new StringBuilder();
					builder.append(stockMarketData);
					builder.append(stockWatch);
					builder.append(stockTradeStrategy.getTradeStrategy().getEntryConditions());
					String response = executeStrategyJSScripts(builder.toString());
					if(response.equalsIgnoreCase("buy")){
						logger.info("Buy order is requested!");
					} else {
						StockWatch stockWatch2 = getStockWatchAsObject(response);
						stockTradeStrategy.setStockWatch(stockWatch2);
					}
				} catch(Exception ex){
					logger.error("Exception happened while trying to process Entry strategy for "+stockTradeStrategy.getTicker()+ " and exception is=" , ex);
					
				}
				
			}
	
		};
		return command;
	}
	
	
	private Runnable getExitRunnable(StockTradeStrategy stockTradeStrategy){
		Runnable command = new Runnable(){

			@Override
			public void run() {
				try{
					String stockMarketData = "var stockMarketData = " + getCurrentMarketDataAsString(stockTradeStrategy.getTicker()) + " \n";
					String stockWatch = "var stockWatch = "  + getStockWatchAsString(stockTradeStrategy.getStockWatch()) + " \n";
					StringBuilder builder = new StringBuilder();
					builder.append(stockMarketData);
					builder.append(stockWatch);
					builder.append(stockTradeStrategy.getTradeStrategy().getExitConditions());
					String response = executeStrategyJSScripts(builder.toString());
					if(response.equalsIgnoreCase("sell")){
						logger.info("Sell order is requested!");
					} else {
						StockWatch stockWatch2 = getStockWatchAsObject(response);
						stockTradeStrategy.setStockWatch(stockWatch2);
					}
				} catch(Exception ex){
					logger.error("Exception happened while trying to process Exit strategy for "+stockTradeStrategy.getTicker()+ " and exception is=" , ex);
				}
				
			}
	
		};
		return command;
	}
	
	
	@PostConstruct
	private void configureJSEngine(){
		ScriptEngineManager factory = new ScriptEngineManager();
	    this.engine = factory.getEngineByName("JavaScript");
	}
}
