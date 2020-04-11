package com.algotrade.alpaca.strategy.pojo;

public class TradeStrategy {

	private String entryConditions;
	private String entrySignal;
	private String exitSignal;
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
	public String getEntrySignal() {
		return entrySignal;
	}
	public void setEntrySignal(String entrySignal) {
		this.entrySignal = entrySignal;
	}
	public String getExitSignal() {
		return exitSignal;
	}
	public void setExitSignal(String exitSignal) {
		this.exitSignal = exitSignal;
	}

}
