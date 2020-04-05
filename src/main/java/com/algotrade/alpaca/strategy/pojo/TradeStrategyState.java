package com.algotrade.alpaca.strategy.pojo;

public enum TradeStrategyState {
	INACTIVE,
	WATCHING,
	ENTRY_ORDER_PENDING,
	EXIT_ORDER_PENDING,
	ENTERED,
	COMPLETED;	
	
}
