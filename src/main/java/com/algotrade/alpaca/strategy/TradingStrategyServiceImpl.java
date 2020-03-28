package com.algotrade.alpaca.strategy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.algotrade.alpaca.data.repository.TradeStrategyRepo;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;

@Component
public class TradingStrategyServiceImpl  implements TradingStrategyServiceI {
	
	@Autowired
	private TradeStrategyRepo setTradeStrategyRepo;
	@Override
	public StockTradeStrategy getTradingStrategy(String ticker) {
		return setTradeStrategyRepo.getStrategy(ticker);

	}

	@Override
	public void storeStockTradeStrategy(StockTradeStrategy stockTradeStrategy) {
		setTradeStrategyRepo.saveStrategy(stockTradeStrategy);		
	}



}
