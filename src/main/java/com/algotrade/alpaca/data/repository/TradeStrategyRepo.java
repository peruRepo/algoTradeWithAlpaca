package com.algotrade.alpaca.data.repository;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.TradeStrategy;

public interface TradeStrategyRepo {
	public void saveStrategy(StockTradeStrategy stockTradeStrategy);
	public StockTradeStrategy getStrategy(String ticker);
	public void addStrategy(String ticker, TradeStrategy tradeStrategy);
}
