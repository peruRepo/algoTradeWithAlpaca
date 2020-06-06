package com.algotrade.alpaca.service;

public interface TradingCircuitBreakerI {

	public boolean allowedToEnterTrade();
	public void stopAllTradeActivities();

}
