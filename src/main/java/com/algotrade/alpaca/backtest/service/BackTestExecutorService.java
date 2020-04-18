package com.algotrade.alpaca.backtest.service;

import com.algotrade.alpaca.backtest.pojo.BackTestRequest;
import com.algotrade.alpaca.backtest.pojo.BackTestResponse;

public interface BackTestExecutorService
{
	public BackTestResponse executeStrategy(BackTestRequest backTestRequest);
}
