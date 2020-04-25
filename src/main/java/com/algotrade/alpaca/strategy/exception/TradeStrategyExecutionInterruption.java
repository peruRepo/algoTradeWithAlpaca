package com.algotrade.alpaca.strategy.exception;

public class TradeStrategyExecutionInterruption extends RuntimeException {
	
	public TradeStrategyExecutionInterruption(String message){
		super(message);		
	}
}
