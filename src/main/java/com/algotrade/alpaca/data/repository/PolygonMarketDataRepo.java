package com.algotrade.alpaca.data.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.algotrade.alpaca.data.polygon.pojo.RecentTradeData;
import com.algotrade.alpaca.data.rest.client.MarketDataClient;

@Service
public class PolygonMarketDataRepo implements MarketDataRepo  {
	
	@Autowired
	private MarketDataClient polygonMarketDataClient;
	
	@Override
	public Double getCurrentPrice(String ticker) {
		RecentTradeData  recentTradeData = polygonMarketDataClient.getRecentMarketData(ticker);
		return recentTradeData.getLast().getPrice();
	}

}
