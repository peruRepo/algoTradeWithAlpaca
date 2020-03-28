package com.algotrade.alpaca.strategy.pojo;

public class TradeStrategy {

	private String entryConditions;
	private String exitConditions;

	
	public String getEntryConditions() {
		return entryConditions;
	}
	public void setEntryConditions(String entryConditions) {
		this.entryConditions = entryConditions;
	}
	public String getExitConditions() {
		return exitConditions;
	}
	public void setExitConditions(String exitConditions) {
		this.exitConditions = exitConditions;
	}

}
