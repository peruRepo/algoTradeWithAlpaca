package com.algotrade.alpaca.backtest.repository;

import java.util.stream.Stream;

import com.algotrade.alpaca.backtest.pojo.BackTestStrategy;

public interface BackTestStrategyRepo {

	public void saveBackTestStrategy(BackTestStrategy backTestStrategy);
	public BackTestStrategy getBackTestStrategy(String name);
	public void removeStrategy(String name);
	public Stream<BackTestStrategy>  getAllBackTestStrategies();
	

}
