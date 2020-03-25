package com.algotrade.alpaca.data.polygon.pojo;

import java.math.BigInteger;

public class RecentTradeDetail {
	private Double price;
	private BigInteger size;
	private Integer exchange;
	private Long timestamp;
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public BigInteger getSize() {
		return size;
	}
	public void setSize(BigInteger size) {
		this.size = size;
	}
	public Integer getExchange() {
		return exchange;
	}
	public void setExchange(Integer exchange) {
		this.exchange = exchange;
	}
	public Long getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Long timestamp) {
		this.timestamp = timestamp;
	}
}
