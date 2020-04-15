package com.algotrade.alpaca.backtest;

import java.time.Duration;
import java.time.ZoneId;
import java.time.ZonedDateTime;

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
import org.ta4j.core.num.Num;
import org.ta4j.core.num.PrecisionNum;
import org.ta4j.core.trading.rules.OverIndicatorRule;
import org.ta4j.core.trading.rules.UnderIndicatorRule;

import com.algotrade.alpaca.strategy.pojo.StockWatch;

public class BackTestDriver2 {
	
	 public static void main(String[] args) throws InterruptedException {
	        BarSeries series = createBarSeries();

	        Strategy dynamicStrategy = createDynamicStrategy(series);

	        BarSeriesManager seriesManager = new BarSeriesManager(series);
	        TradingRecord tradingRecord3DaySma = seriesManager.run(dynamicStrategy, Order.OrderType.BUY,
	                PrecisionNum.valueOf(5000));
	        System.out.println(tradingRecord3DaySma);

	        AnalysisCriterion criterion = new ProfitLossPercentageCriterion();
	        Num calculate3DaySma = criterion.calculate(series, tradingRecord3DaySma);

	        System.out.println(calculate3DaySma);

	    }

	    private static BarSeries createBarSeries() {
	        BarSeries series = new BaseBarSeries();
	        series.addBar(createBar(CreateDay(1), 100.0, 100.0, 100.0, 100.0, 1060));
	        series.addBar(createBar(CreateDay(2), 110.0, 110.0, 110.0, 105.0, 1070));
	        series.addBar(createBar(CreateDay(3), 140.0, 140.0, 140.0, 140.0, 1080));
	        series.addBar(createBar(CreateDay(4), 119.0, 119.0, 119.0, 119.0, 1090));
	        series.addBar(createBar(CreateDay(5), 100.0, 100.0, 100.0, 100.0, 1100));
	        series.addBar(createBar(CreateDay(6), 110.0, 110.0, 110.0, 110.0, 1110));
	        series.addBar(createBar(CreateDay(7), 120.0, 120.0, 120.0, 120.0, 1120));
	        series.addBar(createBar(CreateDay(8), 130.0, 130.0, 130.0, 130.0, 1130));	        
	        series.addBar(createBar(CreateDay(9), 125.0, 150.0, 111.0, 140.0, 1100));
	        series.addBar(createBar(CreateDay(10), 135.0, 170.0, 130.0, 150.0, 1110));
	        series.addBar(createBar(CreateDay(11), 150.0, 155.0, 110.0, 110.0, 1120));
	
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
	    	    		"	if(closePriceIndicator.getValue(index).floatValue() < 111){\n" + 
	    	    		"		stockWatch.setStopLossPercentage(-10.0);\n" + 
	    	    		"		return true;\n" + 
	    	    		"	}\n" + 
	    	    		"	return false;\n" + 
	    	    		"};";
	    	    String sellRule = "function(barSeries, index , stockWatch){ \n" + 
	    	    		"	closePriceIndicator = new ClosePriceIndicator(barSeries);\n" + 
	    	    		"	if(closePriceIndicator.getValue(index).floatValue() > 120){\n" + 
	    	    		"		// stockWatch.setStopLossPercentage(3.0);\n" + 
	    	    		"		return true;\n" + 
	    	    		"	} else if(stockWatch.getProfitPercentage() <=  stockWatch.getStopLossPercentage()) {\n" + 
	    	    		"		return true;\n" + 
	    	    		"	}\n" + 
	    	    		"	return false;\n" + 
	    	    		"	};";
	        return new BaseStrategy(new DynamicTradingRule(series, stockWatch, buyRule), new DynamicTradingRule(series, stockWatch, sellRule));
	    }
	    


}
