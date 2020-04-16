package com.algotrade.alpaca.backtest.pojo;

import java.time.ZonedDateTime;

import org.ta4j.core.Order.OrderType;

public class BackTestTrade  {

	
	private ZonedDateTime entryTime;
	private OrderType entrySignal;
	private Float priceAtEntry;
	
	private ZonedDateTime exitTime;
	private OrderType exitSignal;
	private Float priceAtExit;
	
	private Double profitOrLoss;

	public ZonedDateTime getEntryTime() {
		return entryTime;
	}

	public void setEntryTime(ZonedDateTime entryTime) {
		this.entryTime = entryTime;
	}

	public OrderType getEntrySignal() {
		return entrySignal;
	}

	public void setEntrySignal(OrderType entrySignal ) {
		this.entrySignal = entrySignal ;
	}

	public Float getPriceAtEntry() {
		return priceAtEntry;
	}

	public void setPriceAtEntry(Float priceAtEntry) {
		this.priceAtEntry = priceAtEntry;
	}

	public ZonedDateTime getExitTime() {
		return exitTime;
	}

	public void setExitTime(ZonedDateTime exitTime) {
		this.exitTime = exitTime;
	}

	public OrderType getExitSignal() {
		return exitSignal;
	}

	public void setExitSignal(OrderType exitSignal) {
		this.exitSignal = exitSignal;
	}

	public Float getPriceAtExit() {
		return priceAtExit;
	}

	public void setPriceAtExit(Float priceAtExit) {
		this.priceAtExit = priceAtExit;
	}

	public Double getProfitOrLoss() {
		return profitOrLoss;
	}

	public void setProfitOrLoss(Double profitOrLoss) {
		this.profitOrLoss = profitOrLoss;
	}
	

	

}
