package com.algotrade.alpaca.data.pojo;

public class StopLoss {
	private Double limit_price;
	private Double stop_price;

	public Double getLimit_price() {
		return limit_price;
	}

	public void setLimit_price(Double limit_price) {
		this.limit_price = limit_price;
	}

	public Double getStop_price() {
		return stop_price;
	}

	public void setStop_price(Double stop_price) {
		this.stop_price = stop_price;
	}
	
}
