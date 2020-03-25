package com.algotrade.alpaca.data.rest.client;

import java.sql.Date;

import com.algotrade.alpaca.data.polygon.pojo.AggregatesResponse;
import com.algotrade.alpaca.data.polygon.pojo.RecentTradeData;


public interface MarketDataClient {

	public RecentTradeData getRecentMarketData(String stock);
	public AggregatesResponse getHistoricalMarketData(String stock, String startDate, String endDate);
}
