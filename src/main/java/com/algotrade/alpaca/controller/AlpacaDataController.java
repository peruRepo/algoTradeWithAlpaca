package com.algotrade.alpaca.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.algotrade.alpaca.data.polygon.pojo.AggregatesResponse;
import com.algotrade.alpaca.data.polygon.pojo.RecentTradeData;
import com.algotrade.alpaca.data.rest.client.PolygonMarketDataClient;

@RestController
@CrossOrigin
public class AlpacaDataController {
	
	@Autowired
	private PolygonMarketDataClient polygonMarketDataClient;
	
	
	@GetMapping("/alpaca/getHistoryData")
	@ResponseBody
	public AggregatesResponse getHistoricData(@RequestParam(name = "sticker")String ticker, @RequestParam(name = "startDate")String startDate, @RequestParam(name = "endDate")String endDate){
		return polygonMarketDataClient.getHistoricalMarketData(ticker, startDate, endDate);
	}
	
	@GetMapping("/alpaca/getRecentTradeData")
	@ResponseBody
	public RecentTradeData getHistoricData(@RequestParam(name = "sticker")String ticker){
		return polygonMarketDataClient.getRecentMarketData(ticker);
	}
	
	@GetMapping(value="/alpaca/getTickerSuggestion" , produces={MediaType.APPLICATION_JSON_VALUE, 
            MediaType.APPLICATION_XML_VALUE})
	@ResponseBody
	public String getTickerSuggestion(@RequestParam(name = "tickerSearchString")String tickerSearchString){
		return polygonMarketDataClient.stockSearch(tickerSearchString);
	}

}
