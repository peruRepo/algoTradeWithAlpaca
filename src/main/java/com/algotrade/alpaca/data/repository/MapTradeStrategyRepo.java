package com.algotrade.alpaca.data.repository;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.stereotype.Component;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.TradeStrategy;

@Component
public class MapTradeStrategyRepo implements TradeStrategyRepo {
	
	
	HashMap<String, StockTradeStrategy> stockTradeStrategyMap = new HashMap<>();
	
	
	@Override
	public void saveStrategy(StockTradeStrategy stockTradeStrategy) {
		stockTradeStrategyMap.put(stockTradeStrategy.getTicker(), stockTradeStrategy);
		
	}

//	@Override
//	public void addStrategy(String ticker, TradeStrategy tradeStrategy) {
//		StockTradeStrategy stockTradeStrategy = stockTradeStrategyMap.get(ticker);
//		stockTradeStrategy.addTradeStrategy(tradeStrategy);
//		stockTradeStrategyMap.put(ticker, stockTradeStrategy);
//	}
	
	@Override
	public StockTradeStrategy getStrategy(String ticker) {
		// TODO Auto-generated method stub
		return stockTradeStrategyMap.get(ticker);
	}

	@Override
	public Stream<StockTradeStrategy> getAllStrategies() {
		// TODO Auto-generated method stub
		return stockTradeStrategyMap.values().stream();
	}

}
