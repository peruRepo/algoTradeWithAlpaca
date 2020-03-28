package com.algotrade.alpaca.strategy.pojo;

import java.util.List;

import com.algotrade.alpaca.strategy.trade.condition.TradeCondition;

public class TradeStrategy2 {

	private List<TradeCondition> entryConditions;
	private List<TradeCondition> exitConditions;
	private List<TradeCondition> stopLossConditions;
	private List<TradeCondition> renewConditions;

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
	public List<TradeCondition> getStopLossConditions() {
		return stopLossConditions;
	}
	public void setStopLossConditions(List<TradeCondition> stopLossConditions) {
		this.stopLossConditions = stopLossConditions;
	}
	public List<TradeCondition> getRenewConditions() {
		return renewConditions;
	}
	public void setRenewConditions(List<TradeCondition> renewConditions) {
		this.renewConditions = renewConditions;
	}
	
}
