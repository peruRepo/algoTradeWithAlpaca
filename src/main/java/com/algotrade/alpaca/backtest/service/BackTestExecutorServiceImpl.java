package com.algotrade.alpaca.backtest.service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.ta4j.core.BarSeries;
import org.ta4j.core.BarSeriesManager;
import org.ta4j.core.BaseBarSeries;

import com.algotrade.alpaca.backtest.pojo.BackTestRequest;
import com.algotrade.alpaca.backtest.pojo.BackTestResponse;
import com.algotrade.alpaca.data.rest.client.MarketDataClient;
import com.algotrade.alpaca.data.service.MarketDataService;

import io.github.mainstringargs.alpaca.enums.BarsTimeFrame;

@Component
public class BackTestExecutorServiceImpl implements BackTestExecutorService {
	
	  private BarSeriesManager seriesManager = new BarSeriesManager();
	
	  @Autowired
	  private MarketDataService marketDataService;
	  
	private ZoneId TIMEZONE_ET = ZoneId.of("America/New_York");
	  
	  
	  public BackTestResponse executeStrategy(BackTestRequest backTestRequest) {
		  String ticker = backTestRequest.getTicker();
		   ZonedDateTime endTime = ZonedDateTime.now(TIMEZONE_ET);
		   ZonedDateTime startTime =  null;
			if(backTestRequest.getIntervalDuration().equals(BarsTimeFrame.ONE_DAY)) {
				startTime = endTime.minus(365, ChronoUnit.DAYS);
			} else {
				startTime = endTime.minus(300, ChronoUnit.DAYS);
			}

		marketDataService.getHistoricalMarketData(ticker, candleDuration, candleCount, startTime, endTime)
		  seriesManager.setBarSeries(barSeries);
		return null;
		  
	  }
	  
	  private BarSeries aggregateHistoricalBarSeries(BackTestRequest backTestRequest) {
		  BarSeries barSeries = new BaseBarSeries();
		  String ticker = backTestRequest.getTicker();
		   ZonedDateTime endTime = ZonedDateTime.now(TIMEZONE_ET);
		   ZonedDateTime startTime =  null;
			if(backTestRequest.getIntervalDuration().equals(BarsTimeFrame.ONE_DAY)) {
				startTime = endTime.minus(365, ChronoUnit.DAYS);
				return marketDataService.getHistoricalMarketData(ticker, backTestRequest.getIntervalDuration(), 365, startTime, endTime, null, null);
			} else {
				startTime = endTime.minus(300, ChronoUnit.DAYS);
				barSeries.a
				
				
				
			}

		
		return null;
		  
	  }
}
