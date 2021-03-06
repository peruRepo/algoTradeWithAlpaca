package com.algotrade.alpaca.backtest;

import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;

import org.ta4j.core.AnalysisCriterion;
import org.ta4j.core.BarSeries;
import org.ta4j.core.BarSeriesManager;
import org.ta4j.core.BaseBar;
import org.ta4j.core.BaseStrategy;
import org.ta4j.core.Order;
import org.ta4j.core.Strategy;
import org.ta4j.core.TradingRecord;
import org.ta4j.core.analysis.criteria.ProfitLossPercentageCriterion;
import org.ta4j.core.num.DoubleNum;
import org.ta4j.core.num.Num;
import org.ta4j.core.num.PrecisionNum;

import com.algotrade.alpaca.backtest.service.DynamicTradingRule;
import com.algotrade.alpaca.data.ta4j.AlpacaTa4jAdapter;
import com.algotrade.alpaca.strategy.exception.MarketDataException;
import com.algotrade.alpaca.strategy.pojo.StockWatch;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.enums.BarsTimeFrame;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.bar.Bar;

public class BackTestDriver {
	
	private static ZoneId TIMEZONE_ET = ZoneId.of("America/New_York");
	
	private static BlockingQueue<org.ta4j.core.Bar> blockingQueue = new LinkedBlockingQueue<>();
	
	private static ExecutorService executorService = Executors.newFixedThreadPool(2);
	
	 public static void main(String[] args) throws InterruptedException {
	        BarSeries series = createBarSeries();
	        
	        
	        Strategy dynamicStrategy = createDynamicStrategy(series);

	        BarSeriesManager seriesManager = new BarSeriesManager(series);
	      //  BlockingBarSeriesManager seriesManager = new BlockingBarSeriesManager(series);
	        TradingRecord tradingRecord3DaySma = seriesManager.run(dynamicStrategy, Order.OrderType.BUY,
	        		DoubleNum.valueOf(5));
	        System.out.println(tradingRecord3DaySma.getTrades().get(0).getProfit());

	        AnalysisCriterion criterion = new ProfitLossPercentageCriterion();
	        Num calculate3DaySma = criterion.calculate(series, tradingRecord3DaySma);

	        System.out.println(calculate3DaySma);
	        System.out.println("Execution Ended");
	        
	   //     executorService.shutdown();
	        System.out.println("Size="+series.getEndIndex());
	       // executorService.awaitTermination(60, TimeUnit.SECONDS);

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
			
			 /*executorService.submit(historyBarDataProducer(alpacaAPI,"TSLA","ONE_MIN",BarsTimeFrame.ONE_MIN,1000));
			BarSeries series = new BaseBarSeries();
			executorService.submit(() -> {
				try {
					org.ta4j.core.Bar ta4jBar = null;
					while((ta4jBar = blockingQueue.poll(10, TimeUnit.SECONDS)) != null ) {
						series.addBar(ta4jBar);
					}
					System.out.println("Data pulling Ended");					
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			});
			*/
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
	    	    		"	if(stockWatch.getProfitPercentage() > stockWatch.getTargetProfitPercentage()){\n" + 
	    	    		"		stockWatch.setStopLossPercentage(3.0);\n" + 
	    	    		"		return false;\n" + 
	    	    		"	} else if(stockWatch.getProfitPercentage() <=  stockWatch.getStopLossPercentage()) {\n" + 
	    	    		"		return true;\n" + 
	    	    		"	}\n" + 
	    	    		"	return false;\n" + 
	    	    		"	};";
	        return new BaseStrategy(new DynamicTradingRule(series, stockWatch, buyRule), new DynamicTradingRule(series, stockWatch, sellRule));
	    }
	    
	    
	    private static Runnable historyBarDataProducer(AlpacaAPI alpacaAPI, String ticker, String candleDuration, BarsTimeFrame timeFrame,
				Integer candleCount){
	    		return new Runnable() {

					@Override
					public void run() {
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
						ZonedDateTime startTimeAfter = maxEndTime.minus(200, ChronoUnit.DAYS);
						ZonedDateTime endTimeUntil = startTimeAfter.plusDays(daysOfData);
						
						while(!endTimeUntil.isAfter(maxEndTime)) {
							try{
								Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, maxCandleCount, null, null, startTimeAfter,
										endTimeUntil);				
								ArrayList<Bar> barArrayList = bars.get(ticker);
								startTimeAfter = ZonedDateTime.ofInstant(Instant.ofEpochSecond(bars.get(ticker).get(barArrayList.size() - 1).getT()), ZoneId.systemDefault());
								endTimeUntil = endTimeUntil.plusDays(daysOfData);
								for(Bar bar: barArrayList){
									org.ta4j.core.Bar ta4jBar = new BaseBar(Duration.ofMinutes(1), 
											ZonedDateTime.ofInstant(Instant.ofEpochSecond(bar.getT()),	TIMEZONE_ET), 
											bar.getO().toString(), 
											bar.getH().toString(), 
											bar.getL().toString(), 
											bar.getC().toString(), 
											bar.getV().toString()
											);
									blockingQueue.put(ta4jBar);
								}
							} catch (AlpacaAPIRequestException | InterruptedException e) {
									throw new MarketDataException("Error while fetching AlpcaMarket data");
							}

						}
						
					}
	    			
	    		};
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
			ZonedDateTime startTimeAfter = maxEndTime.minus(200, ChronoUnit.DAYS);
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
			return AlpacaTa4jAdapter.generateBars(aggregatedbars,Duration.ofMinutes(1));
		}

}
