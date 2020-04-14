package com.algotrade.alpaca.strategy;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StreamUtils;

import com.algotrade.alpaca.data.repository.TradeStrategyRepo;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;

@Component
public class TradingStrategyServiceImpl  implements TradingStrategyServiceI {
	
	@Autowired
	private TradeStrategyRepo tradeStrategyRepo;
	@Override
	public StockTradeStrategy getTradingStrategy(String ticker) {
		return tradeStrategyRepo.getStrategy(ticker);

	}

	@Override
	public void storeStockTradeStrategy(StockTradeStrategy stockTradeStrategy) {
		tradeStrategyRepo.saveStrategy(stockTradeStrategy);		
	}

	@Override
	public void removeTradingStrategy(String ticker) {
		// TODO Auto-generated method stub
		 tradeStrategyRepo.removeStrategy(ticker);
	}

	@Override
	public List<StockTradeStrategy> getAllTradingStrategies() {
		
		return tradeStrategyRepo.getAllStrategies().collect(Collectors.toList());
	}



}
