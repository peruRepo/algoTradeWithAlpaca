package com.algotrade.alpaca.backtest.pojo;

import java.util.List;

public class BackTestResponse {

	private List<BackTestTrade> trades;
	private Double profitPercentage;
	public List<BackTestTrade> getTrades() {
		return trades;
	}
	public void setTrades(List<BackTestTrade> trades) {
		this.trades = trades;
	}
	public Double getProfitPercentage() {
		return profitPercentage;
	}
	public void setProfitPercentage(Double profitPercentage) {
		this.profitPercentage = profitPercentage;
	}
	
	
	
}
