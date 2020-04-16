package com.algotrade.alpaca.backtest.pojo;

import java.util.List;

public class BackTestResponse {

	private List<BackTestTrade> trades;
	private Float profitPercentage;
	public List<BackTestTrade> getTrades() {
		return trades;
	}
	public void setTrades(List<BackTestTrade> trades) {
		this.trades = trades;
	}
	public Float getProfitPercentage() {
		return profitPercentage;
	}
	public void setProfitPercentage(Float profitPercentage) {
		this.profitPercentage = profitPercentage;
	}
	
	
	
}
