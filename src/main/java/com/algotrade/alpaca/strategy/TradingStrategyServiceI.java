package com.algotrade.alpaca.strategy;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.TradeStrategy;

public interface TradingStrategyServiceI {

	public StockTradeStrategy getTradingStrategy(String ticker);
	public void storeStockTradeStrategy(StockTradeStrategy stockTradeStrategy);
}
