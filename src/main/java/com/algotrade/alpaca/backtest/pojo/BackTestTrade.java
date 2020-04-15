package com.algotrade.alpaca.backtest.pojo;

import java.time.ZonedDateTime;

import org.ta4j.core.Trade;

public class BackTestTrade extends Trade {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private ZonedDateTime dateTime;

	public ZonedDateTime getDateTime() {
		return dateTime;
	}

	public void setDateTime(ZonedDateTime dateTime) {
		this.dateTime = dateTime;
	}
	

}
