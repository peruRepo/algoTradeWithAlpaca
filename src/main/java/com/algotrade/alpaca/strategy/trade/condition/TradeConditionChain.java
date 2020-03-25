package com.algotrade.alpaca.strategy.trade.condition;

import java.util.List;

public interface TradeConditionChain {
	public Boolean evaluateCondition(List<TradeCondition> tradingConditions);
}
