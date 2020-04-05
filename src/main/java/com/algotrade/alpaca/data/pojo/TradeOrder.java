package com.algotrade.alpaca.data.pojo;

public class TradeOrder {
	private String ticker;
	private Integer quantity;
	private Double triggerPrice;

	public String getTicker() {
		return ticker;
	}

	public void setTicker(String ticker) {
		this.ticker = ticker;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getTriggerPrice() {
		return triggerPrice;
	}

	public void setTriggerPrice(Double triggerPrice) {
		this.triggerPrice = triggerPrice;
	}
}
