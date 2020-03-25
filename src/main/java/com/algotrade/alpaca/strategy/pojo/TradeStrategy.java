package com.algotrade.alpaca.strategy.pojo;

import java.util.List;

import com.algotrade.alpaca.strategy.trade.condition.TradeCondition;

public class TradeStrategy {

	private List<TradeCondition> entryConditions;
	private List<TradeCondition> exitConditions;

	public List<TradeCondition> getEntryConditions() {
		return entryConditions;
	}
	public void setEntryConditions(List<TradeCondition> entryConditions) {
		this.entryConditions = entryConditions;
	}
	public List<TradeCondition> getExitConditions() {
		return exitConditions;
	}
	public void setExitConditions(List<TradeCondition> exitConditions) {
		this.exitConditions = exitConditions;
	}
	
}
