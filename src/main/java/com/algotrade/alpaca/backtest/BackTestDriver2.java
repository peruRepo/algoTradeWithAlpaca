package com.algotrade.alpaca.backtest;

import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Map;

import org.ta4j.core.AnalysisCriterion;
import org.ta4j.core.BarSeries;
import org.ta4j.core.BarSeriesManager;
import org.ta4j.core.BaseBar;
import org.ta4j.core.BaseBarSeries;
import org.ta4j.core.BaseStrategy;
import org.ta4j.core.Order;
import org.ta4j.core.Strategy;
import org.ta4j.core.TradingRecord;
import org.ta4j.core.analysis.criteria.ProfitLossPercentageCriterion;
import org.ta4j.core.analysis.criteria.TotalProfitCriterion;
import org.ta4j.core.indicators.SMAIndicator;
import org.ta4j.core.indicators.helpers.ClosePriceIndicator;
import org.ta4j.core.num.DoubleNum;
import org.ta4j.core.num.Num;
import org.ta4j.core.num.PrecisionNum;
import org.ta4j.core.trading.rules.OverIndicatorRule;
import org.ta4j.core.trading.rules.UnderIndicatorRule;

import com.algotrade.alpaca.data.ta4j.AlpacaTa4jAdapter;
import com.algotrade.alpaca.strategy.exception.MarketDataException;
import com.algotrade.alpaca.strategy.pojo.StockWatch;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.enums.BarsTimeFrame;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.bar.Bar;

public class BackTestDriver2 {
	
	private static ZoneId TIMEZONE_ET = ZoneId.of("America/New_York");
	
	 public static void main(String[] args) throws InterruptedException {
	        BarSeries series = createBarSeries();
	        
	        System.out.println("Size="+series.getEndIndex());
            loggerSetup();
	        Strategy dynamicStrategy = createDynamicStrategy(series);

	        BarSeriesManager seriesManager = new BarSeriesManager(series);
	        TradingRecord tradingRecord3DaySma = seriesManager.run(dynamicStrategy, Order.OrderType.BUY,
	        		DoubleNum.valueOf(5000.0));
	        System.out.println(tradingRecord3DaySma);

	        AnalysisCriterion criterion = new ProfitLossPercentageCriterion();
	        Num calculate3DaySma = criterion.calculate(series, tradingRecord3DaySma);

	        System.out.println(calculate3DaySma);

	    }

	    private static void loggerSetup() {
	    	System.setProperty("org.apache.commons.logging.Log", "org.apache.commons.logging.impl.SimpleLog");
	    	System.setProperty("org.apache.commons.logging.simplelog.showdatetime", "true");
	    	System.setProperty("org.apache.commons.logging.simplelog.log.httpclient.wire.header", "error");
	    	System.setProperty("org.apache.commons.logging.simplelog.log.org.apache.http", "error");
	    	System.setProperty("log4j.logger.org.apache.http", "error");
	    	System.setProperty("log4j.logger.org.apache.http.wire", "error");
	    	System.setProperty("org.apache.commons.logging.simplelog.log.org.apache.commons.httpclient", "error");
		
	}

		private static BarSeries createBarSeries() {
	        
//	        series.addBar(createBar(CreateDay(1), 100.0, 100.0, 100.0, 100.0, 1060));
//	        series.addBar(createBar(CreateDay(2), 110.0, 110.0, 110.0, 105.0, 1070));
//	        series.addBar(createBar(CreateDay(3), 140.0, 140.0, 140.0, 140.0, 1080));
//	        series.addBar(createBar(CreateDay(4), 119.0, 119.0, 119.0, 119.0, 1090));
//	        series.addBar(createBar(CreateDay(5), 100.0, 100.0, 100.0, 100.0, 1100));
//	        series.addBar(createBar(CreateDay(6), 110.0, 110.0, 110.0, 110.0, 1110));
//	        series.addBar(createBar(CreateDay(7), 120.0, 120.0, 120.0, 120.0, 1120));
//	        series.addBar(createBar(CreateDay(8), 130.0, 130.0, 130.0, 130.0, 1130));	        
//	        series.addBar(createBar(CreateDay(9), 125.0, 150.0, 111.0, 140.0, 1100));
//	        series.addBar(createBar(CreateDay(10), 135.0, 170.0, 130.0, 150.0, 1110));
//	        series.addBar(createBar(CreateDay(11), 150.0, 155.0, 110.0, 110.0, 1120));
	        
	    	String keyId = System.getProperty("alpca.api.keyId");
			String secret = System.getProperty("alpca.api.secret");
			System.setProperty("javax.net.ssl.trustStore",
					"/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/jre/lib/security/cacerts");
			System.setProperty("javax.net.ssl.trustStorePassword", "changeit");
			
			AlpacaAPI alpacaAPI = new AlpacaAPI("V2", keyId, secret, "https://paper-api.alpaca.markets",
					"https://data.alpaca.markets");
			BarSeries series  = aggregateBarSeriesData(alpacaAPI,"TSLA","ONE_MIN",BarsTimeFrame.ONE_MIN,1000);
	        return series;
	    }

	    private static BaseBar createBar(ZonedDateTime endTime, Number openPrice, Number highPrice, Number lowPrice,
	            Number closePrice, Number volume) {
	        return BaseBar.builder(PrecisionNum::valueOf, Number.class).timePeriod(Duration.ofDays(1)).endTime(endTime)
	                .openPrice(openPrice).highPrice(highPrice).lowPrice(lowPrice).closePrice(closePrice).volume(volume)
	                .build();
	    }

	    private static ZonedDateTime CreateDay(int day) {
	        return ZonedDateTime.of(2018, 01, day, 12, 0, 0, 0, ZoneId.systemDefault());
	    }

	    private static Strategy createDynamicStrategy(BarSeries series) {
	    	    StockWatch stockWatch = new StockWatch();
	    	    stockWatch.setStopLossPercentage(0.0);
	    	    stockWatch.setProfitPercentage(15.0);
	    	    String buyRule = "function(barSeries, index, stockWatch){ \n" + 
	    	    		"	closePriceIndicator = new ClosePriceIndicator(barSeries);\n" + 
	    	    		"	if(closePriceIndicator.getValue(index).floatValue() < 500){\n" + 
	    	    		"		stockWatch.setStopLossPercentage(-10.0);\n" + 
	    	    		"		return true;\n" + 
	    	    		"	}\n" + 
	    	    		"	return false;\n" + 
	    	    		"};";
	    	    String sellRule = "function(barSeries, index , stockWatch){ \n" + 
	    	    		"	closePriceIndicator = new ClosePriceIndicator(barSeries);\n" + 
	    	    		"	if(closePriceIndicator.getValue(index).floatValue() > 700){\n" + 
	    	    		"		// stockWatch.setStopLossPercentage(3.0);\n" + 
	    	    		"		return true;\n" + 
	    	    		"	} else if(stockWatch.getProfitPercentage() <=  stockWatch.getStopLossPercentage()) {\n" + 
	    	    		"		return true;\n" + 
	    	    		"	}\n" + 
	    	    		"	return false;\n" + 
	    	    		"	};";
	        return new BaseStrategy(new DynamicTradingRule(series, stockWatch, buyRule), new DynamicTradingRule(series, stockWatch, sellRule));
	    }
	    
		private static BarSeries aggregateBarSeriesData(AlpacaAPI alpacaAPI, String ticker, String candleDuration, BarsTimeFrame timeFrame,
				Integer candleCount) {
			LinkedList<Bar> aggregatedbars = new LinkedList<Bar>();
			ZonedDateTime maxEndTime = ZonedDateTime.now(TIMEZONE_ET);
			boolean endOfDuration = false;
			Integer daysOfData = 1;
			Integer maxCandleCount = 1000;
			Integer workingHoursPerDay = 8;
				
			if(candleDuration.equals(BarsTimeFrame.FIVE_MINUTE.toString())) {				
				daysOfData = (maxCandleCount / 12) / 8;
			} else if(candleDuration.equals(BarsTimeFrame.ONE_MIN.toString())) {
				daysOfData = (maxCandleCount / 60) / 8;
			} else if(candleDuration.equals(BarsTimeFrame.FIFTEEN_MINUTE.toString())) {
				daysOfData = ( maxCandleCount / 4 ) / 8;
			} 
		//	ZonedDateTime startTimeAfter = endTime.minusDays(daysOfData);
			ZonedDateTime startTimeAfter = maxEndTime.minus(360, ChronoUnit.DAYS);
			ZonedDateTime endTimeUntil = startTimeAfter.plusDays(daysOfData);
			
			while(!endTimeUntil.isAfter(maxEndTime)) {
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
			return AlpacaTa4jAdapter.generateBars(aggregatedbars);
		}

}
