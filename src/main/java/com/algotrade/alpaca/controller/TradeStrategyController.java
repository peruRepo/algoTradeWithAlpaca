package com.algotrade.alpaca.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.algotrade.alpaca.strategy.TradingStrategyExecutionServiceI;
import com.algotrade.alpaca.strategy.TradingStrategyServiceI;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.StockWatch;
import com.algotrade.alpaca.strategy.pojo.TradeStrategy;

@RestController
public class TradeStrategyController {

	@Autowired
	private TradingStrategyServiceI tradingStrategyService;
	
	@Autowired
	private TradingStrategyExecutionServiceI tradingStrategyExecutionService;
	
	@PostMapping("/alpaca/strategy/updateStrategy")
	@ResponseBody
	public String updateStrategy(@RequestBody StockTradeStrategy stockTradeStrategy){
		tradingStrategyService.storeStockTradeStrategy(stockTradeStrategy);
		return "success";
	}
	
	@PostMapping("/alpaca/strategy/getStrategy")
	@ResponseBody
	public StockTradeStrategy getStrategy(String ticker){
		return tradingStrategyService.getTradingStrategy(ticker);		
	}
	
	
	@GetMapping("/alpaca/strategy/getStrategyTemplate")
	@ResponseBody
	public StockTradeStrategy getStrategyTemplate(String ticker){
		return getStrategyTemplate();		
	}
	
	@GetMapping("/alpaca/strategy/executeStrategy")
	@ResponseBody
	public String executeStrategy(String ticker){
		tradingStrategyExecutionService.executeStrategies();
		return "success";
	}
	
	private StockTradeStrategy getStrategyTemplate(){
		StockTradeStrategy stockTradeStrategy = new StockTradeStrategy();
		stockTradeStrategy.setTicker("TSLA");
		stockTradeStrategy.setInterval(2);
		stockTradeStrategy.setTimeUnit("MINUTES");
		stockTradeStrategy.setState("INACTIVE");
		stockTradeStrategy.setQuantity(10);
		TradeStrategy tradeStrategy = new TradeStrategy();
		String entryConditions = 
				"  function entryCondition(stockMarketData, stockWatch){" + 
				"   	 if (stockMarketData.currentPrice <= 500) { " + 
				"       	 	stockWatch.stopLossPercentage = 10;" + 
				"        	    return \"buy\";" + 
				"    		} \n" + 
				"  };\n" + 
				"  entryCondition(stockMarketData, stockWatch);";
		tradeStrategy.setEntryConditions(entryConditions);
		String exitConditions = 
				"  function exitCondition(stockMarketData, stockWatch){\n" + 
				"    if (stockMarketData.totalProfitPercentage <= stockWatch.stopLossPercentage){ \n" + 
				"        return \"sell\"; \n" + 
				"    } else { \n" + 
				"        stockWatch.stopLossPercentage = stockWatch.stopLossPercentage + stockMarketData.totalProfitPercentage;\n" + 
				"        return stockWatch;\n" + 
				"      }\n" + 
				"  }\n" + 
				"  exitCondition(stockMarketData, stockWatch);";
		tradeStrategy.setExitConditions(exitConditions);		
		stockTradeStrategy.setTradeStrategy(tradeStrategy);
		StockWatch stockWatch = new StockWatch();
		stockWatch.setStopLossPercentage(500.0);
		stockTradeStrategy.setStockWatch(stockWatch);
		return stockTradeStrategy;
		
	}
}
