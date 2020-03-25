package com.algotrade.alpaca.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.algotrade.alpaca.strategy.TradingStrategyServiceI;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.TradeStrategy;

@RestController
public class TradeStrategyController {

	@Autowired
	private TradingStrategyServiceI tradingStrategyService;
	
	
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
	
	
	private StockTradeStrategy setMockStrategy(){
		StockTradeStrategy stockTradeStrategy = new StockTradeStrategy();
		stockTradeStrategy.setTicker("TSLA");
		Set<TradeStrategy> tradeStrategies = new HashSet<>();
		TradeStrategy tradeStrategy = new TradeStrategy();
		tradeStrategy.setEntryConditions(entryConditions);
		stockTradeStrategy.setTradeStrategy(tradeStrategies);
		return stockTradeStrategy;
		
	}
}
