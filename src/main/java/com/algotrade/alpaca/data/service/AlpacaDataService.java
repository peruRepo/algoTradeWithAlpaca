package com.algotrade.alpaca.data.service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.TimeUnit;

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
	
	public BarSeries getMarketData(String ticker, String candleDuration, Integer candleCount) {
		
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
	
	
}
