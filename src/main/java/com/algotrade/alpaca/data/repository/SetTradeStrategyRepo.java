package com.algotrade.alpaca.data.repository;

import java.util.HashMap;
import java.util.HashSet;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.TradeStrategy;

public class SetTradeStrategyRepo implements TradeStrategyRepo {
	
	
	HashMap<String, StockTradeStrategy> stockTradeStrategyMap = new HashMap<>();
	
	
	@Override
	public void saveStrategy(StockTradeStrategy stockTradeStrategy) {
		stockTradeStrategyMap.put(stockTradeStrategy.getTicker(), stockTradeStrategy);
		
	}

	@Override
	public void addStrategy(String ticker, TradeStrategy tradeStrategy) {
		StockTradeStrategy stockTradeStrategy = stockTradeStrategyMap.get(ticker);
		stockTradeStrategy.addTradeStrategy(tradeStrategy);
		stockTradeStrategyMap.put(ticker, stockTradeStrategy);
	}
	
	@Override
	public StockTradeStrategy getStrategy(String ticker) {
		// TODO Auto-generated method stub
		return stockTradeStrategyMap.get(ticker);
	}

}
