package com.algotrade.alpaca.data.service;

import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.ta4j.core.BarSeries;

import com.algotrade.alpaca.data.ta4j.AlpacaTa4jAdapter;
import com.algotrade.alpaca.strategy.exception.MarketDataException;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.enums.BarsTimeFrame;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.bar.Bar;

@Component
public class AlpacaDataService  implements MarketDataService {
	private static final Logger logger = LoggerFactory.getLogger(AlpacaDataService.class);
	
	
	@Autowired	
	private AlpacaAPI alpacaAPI;
	
	
	private ZoneId TIMEZONE_ET = ZoneId.of("America/New_York");
	

	@Override
	public BarSeries getCurrentMarketData(String ticker, String candleDuration, Integer candleCount) {
		BarsTimeFrame timeFrame = BarsTimeFrame.valueOf(candleDuration);		
		ZonedDateTime currentTime = ZonedDateTime.now(TIMEZONE_ET);
		TemporalUnit unit = null;
		Duration duration = null;
		if(candleDuration.equals(BarsTimeFrame.ONE_DAY)) {
			unit = ChronoUnit.DAYS;
			duration = Duration.ofDays(1);
		} else {
			unit = ChronoUnit.MINUTES;
			duration = Duration.ofMinutes(1);
		}

		ZonedDateTime startTime = currentTime.minus(candleCount, unit);
		try {
			Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, candleCount, startTime, currentTime, null,
					null);
			return AlpacaTa4jAdapter.generateBars(bars.get(ticker),duration );
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happend while trying to get Alpaca market data and execption is =",e);
			throw new MarketDataException("Error while fetching AlpcaMarket data");
		}
	}

	@Override
	public BarSeries getHistoricalMarketData(String ticker, String candleDuration, 
			Integer candleCount,
			ZonedDateTime startTime ,
			ZonedDateTime endTime
			) {
		BarsTimeFrame timeFrame = BarsTimeFrame.valueOf(candleDuration);		
		if(candleDuration.equals(BarsTimeFrame.ONE_DAY.toString())) {
			try {
				Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, candleCount, startTime, endTime, null,
						null);
				return AlpacaTa4jAdapter.generateBars(bars.get(ticker),Duration.ofDays(1));
			} catch (AlpacaAPIRequestException e) {
				logger.error("Exception happend while trying to get Alpaca market data and execption is =",e);
				throw new MarketDataException("Error while fetching AlpcaMarket data");
			}
		} else {
				
			return aggregateBarSeriesData(ticker, candleDuration,startTime, endTime);
	}

	}
	
	
	private BarSeries aggregateBarSeriesData(String ticker, String candleDuration , ZonedDateTime startTime, ZonedDateTime endTime) {
		LinkedList<Bar> aggregatedbars = new LinkedList<Bar>();
	//	ZonedDateTime maxEndTime = ZonedDateTime.now(TIMEZONE_ET);
	//	ZonedDateTime startTimeAfter = maxEndTime.minus(360, ChronoUnit.DAYS);
		Integer daysOfData = 1;
		Integer maxCandleCount = 1000;
		Integer workingHoursPerDay = 8;
		BarsTimeFrame timeFrame = null;
		if(candleDuration.equals(BarsTimeFrame.FIVE_MINUTE.toString())) {	
			timeFrame = BarsTimeFrame.FIVE_MINUTE;
			daysOfData = (maxCandleCount / 12) / 8;
		} else if(candleDuration.equals(BarsTimeFrame.ONE_MIN.toString())) {
			timeFrame = BarsTimeFrame.ONE_MIN;
			daysOfData = (maxCandleCount / 60) / 8;
		} else if(candleDuration.equals(BarsTimeFrame.FIFTEEN_MINUTE.toString())) {
			timeFrame = BarsTimeFrame.FIFTEEN_MINUTE;
			daysOfData = ( maxCandleCount / 4 ) / 8;
		} 
	    ZonedDateTime startTimeAfter = startTime;		
		ZonedDateTime endTimeUntil = startTimeAfter.plusDays(daysOfData);
		
		while(!endTimeUntil.isAfter(endTime)) {
			try{
				Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, maxCandleCount, null, null, startTimeAfter,
						endTimeUntil);				
				aggregatedbars.addAll(bars.get(ticker));
				startTimeAfter = ZonedDateTime.ofInstant(Instant.ofEpochSecond(aggregatedbars.getLast().getT()), ZoneId.systemDefault());
				endTimeUntil = endTimeUntil.plusDays(daysOfData);
			} catch (AlpacaAPIRequestException e) {
					throw new MarketDataException("Error while fetching AlpcaMarket data");
			}

		}
		return AlpacaTa4jAdapter.generateBars(aggregatedbars,Duration.ofMinutes(1));
	}
}
