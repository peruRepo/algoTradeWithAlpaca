package com.algotrade.alpaca.data.polygon.pojo;

public class RecentTradeData {
	private String status;
	private String symbol;
	private RecentTradeDetail last;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	public RecentTradeDetail getLast() {
		return last;
	}
	public void setLast(RecentTradeDetail last) {
		this.last = last;
	}
	
	
}
