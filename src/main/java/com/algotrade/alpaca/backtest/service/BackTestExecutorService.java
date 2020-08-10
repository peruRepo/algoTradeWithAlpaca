package com.algotrade.alpaca.backtest.service;

import com.algotrade.alpaca.backtest.pojo.BackTestRequest;
import com.algotrade.alpaca.backtest.pojo.BackTestResponse;
import com.algotrade.alpaca.backtest.pojo.BackTestStrategy;

public interface BackTestExecutorService
{
	public BackTestResponse executeStrategy(BackTestRequest backTestRequest);
	public void storeStrategy(BackTestStrategy backTestStrategy);
}
