package com.algotrade.alpaca.data.service;

import org.ta4j.core.BarSeries;

public interface MarketDataService {
	public BarSeries getMarketData(String ticker, String candleDuration, Integer candleCount);
}
