package com.algotrade.alpaca.strategy;

import java.util.List;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.TradeStrategy;

public interface TradingStrategyServiceI {

	public StockTradeStrategy getTradingStrategy(String ticker);
	public List<StockTradeStrategy> getAllTradingStrategies();
	public void storeStockTradeStrategy(StockTradeStrategy stockTradeStrategy);
	public void removeTradingStrategy(String ticker);
}
