package com.algotrade.alpaca.strategy.trade.condition;

public abstract class BaseTradeCondition implements TradeCondition {

	
	protected double getCurrentPrice(String ticker){
		return 0;		
	}
}
