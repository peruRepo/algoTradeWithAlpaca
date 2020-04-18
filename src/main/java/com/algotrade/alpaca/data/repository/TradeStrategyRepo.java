package com.algotrade.alpaca.data.repository;


import java.util.stream.Stream;

import com.algotrade.alpaca.backtest.pojo.BackTestStrategy;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;


public interface TradeStrategyRepo {
	public void saveStrategy(StockTradeStrategy stockTradeStrategy);
	public StockTradeStrategy getStrategy(String ticker);
	public void removeStrategy(String ticker);
	public Stream<StockTradeStrategy>  getAllStrategies();
}
