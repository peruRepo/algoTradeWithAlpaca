package com.algotrade.alpaca.backtest.pojo;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.format.annotation.DateTimeFormat;
import org.ta4j.core.Order.OrderType;

import com.fasterxml.jackson.annotation.JsonFormat;

public class BackTestTrade  {

	private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy - HH:mm:ss");

	private String entryTime;
	private OrderType entrySignal;
	private Float priceAtEntry;
	

	private String exitTime;
	private OrderType exitSignal;
	private Float priceAtExit;
	
	private Float profitOrLoss;

	public String getEntryTime() {
		return entryTime;
	}

	public void setEntryTime(ZonedDateTime entryTime) {
		this.entryTime = entryTime.format(formatter);
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

	public String getExitTime() {
		return exitTime;
	}

	public void setExitTime(ZonedDateTime exitTime) {
		this.exitTime = exitTime.format(formatter);
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

	public Float getProfitOrLoss() {
		return profitOrLoss;
	}

	public void setProfitOrLoss(Float profitOrLoss) {
		this.profitOrLoss = profitOrLoss;
	}
	

	

}
