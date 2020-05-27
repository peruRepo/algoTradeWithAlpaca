package com.algotrade.alpaca.controller;

import java.util.ArrayList;
import java.util.List;

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
import com.algotrade.alpaca.data.rest.client.TradingService;
import com.algotrade.alpaca.service.PortfolioServiceI;

import io.github.mainstringargs.domain.alpaca.account.Account;
import io.github.mainstringargs.domain.alpaca.order.Order;
import io.github.mainstringargs.domain.alpaca.portfoliohistory.PortfolioHistory;
import io.github.mainstringargs.domain.alpaca.position.Position;

@RestController
@CrossOrigin
public class AlpacaDataController {
	
	@Autowired
	private PolygonMarketDataClient polygonMarketDataClient;
	
	@Autowired 
	private TradingService tradingService;
	
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
	
	@GetMapping("/alpaca/getOpenPosition")
	@ResponseBody
	public List<Position> getOpenPosition(){
		return  tradingService.getOpenPositions();
	}

	@GetMapping("/alpaca/getOrders")
	@ResponseBody
	public List<Order> getRecentlyExecutedOrders(@RequestParam(name = "days")Integer days, @RequestParam(name = "maxRows")Integer maxRows){
		return (ArrayList<Order>) tradingService.getOrders(days, maxRows);
	}
	
	@GetMapping("/alpaca/getAccount")
	@ResponseBody
	public Account getAccount(){
		return tradingService.getAccount();
	}
}
