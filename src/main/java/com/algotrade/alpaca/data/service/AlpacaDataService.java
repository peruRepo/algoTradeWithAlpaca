package com.algotrade.alpaca.data.service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.jasypt.util.numeric.IntegerNumberEncryptor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mapping.model.CamelCaseAbbreviatingFieldNamingStrategy;
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
		if(candleDuration.equals(BarsTimeFrame.ONE_DAY)) {
			unit = ChronoUnit.DAYS;
		} else {
			unit = ChronoUnit.MINUTES;
		}

		ZonedDateTime startTime = currentTime.minus(candleCount, unit);
		try {
			Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, candleCount, startTime, currentTime, null,
					null);
			return AlpacaTa4jAdapter.generateBars(bars.get(ticker));
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
		if(candleDuration.equals(BarsTimeFrame.ONE_DAY)) {
			startTime = endTime.minus(300, ChronoUnit.DAYS);
			try {
				Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, candleCount, startTime, endTime, null,
						null);
				return AlpacaTa4jAdapter.generateBars(bars.get(ticker));
			} catch (AlpacaAPIRequestException e) {
				logger.error("Exception happend while trying to get Alpaca market data and execption is =",e);
				throw new MarketDataException("Error while fetching AlpcaMarket data");
			}
		} else {
				

				
				

	}
		return null;
	}
	
	
	private BarSeries aggregateBarSeriesData(String ticker, String candleDuration, BarsTimeFrame timeFrame,
			Integer candleCount) {
		LinkedList<Bar> aggregatedbars = new LinkedList<Bar>();
		ZonedDateTime endTime = ZonedDateTime.now(TIMEZONE_ET);
		boolean endOfDuration = false;
		Integer daysOfData = 1;
		Integer maxCandleCount = 1000;
		Integer workingHoursPerDay = 8;
		// Maximum to get  year worth of data
		ZonedDateTime maxStartingTime = endTime.minus(365, ChronoUnit.DAYS);
		
		
		if(candleDuration.equals(BarsTimeFrame.FIVE_MINUTE)) {
			
			daysOfData = (maxCandleCount / 12) / 8;
		} else if(candleDuration.equals(BarsTimeFrame.ONE_MIN)) {
			daysOfData = (maxCandleCount / 60) / 8;
		} else if(candleDuration.equals(BarsTimeFrame.FIFTEEN_MINUTE)) {
			daysOfData = ( maxCandleCount / 4 ) / 8;
		} 
		ZonedDateTime startTimeAfter = endTime.minusDays(daysOfData);
		
		while(!startTimeAfter.isBefore(maxStartingTime)) {
			try{
				Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, maxCandleCount, null, endTime, startTimeAfter,
						null);				
				aggregatedbars.addAll(bars.get(ticker));
				startTimeAfter = ZonedDateTime.ofInstant(Instant.ofEpochMilli(aggregatedbars.getLast().getT()), ZoneId.systemDefault());
			} catch (AlpacaAPIRequestException e) {
				logger.error("Exception happend while trying to get Alpaca market data and execption is =",e);
				throw new MarketDataException("Error while fetching AlpcaMarket data");
			}

		}
		return AlpacaTa4jAdapter.generateBars(aggregatedbars);
	}
}
