package com.algotrade.alpaca.strategy.pojo;

public class StockWatch {
	private Double  stopLossPercentage;
	private Double profitPercentage;
	private Double targetProfitPercentage;

	public Double getStopLossPercentage() {
		return stopLossPercentage;
	}

	public void setStopLossPercentage(Double stopLossPercentage) {
		this.stopLossPercentage = stopLossPercentage;
	}

	public Double getProfitPercentage() {
		return profitPercentage;
	}

	public void setProfitPercentage(Double profitPercentage) {
		this.profitPercentage = profitPercentage;
	}

	public Double getTargetProfitPercentage() {
		return targetProfitPercentage;
	}

	public void setTargetProfitPercentage(Double targetProfitPercentage) {
		this.targetProfitPercentage = targetProfitPercentage;
	}


	
}
