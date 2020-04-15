package com.algotrade.alpaca.data.service;

import java.time.ZonedDateTime;

import org.ta4j.core.BarSeries;

public interface MarketDataService {
	public BarSeries getCurrentMarketData(String ticker, String candleDuration, Integer candleCount);
	
	public BarSeries getHistoricalMarketData(
			String ticker, 
			String candleDuration, 
			Integer candleCount,
			ZonedDateTime startTime ,
			ZonedDateTime endTime);
}
