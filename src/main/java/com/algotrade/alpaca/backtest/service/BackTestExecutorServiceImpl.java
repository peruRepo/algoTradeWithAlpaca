package com.algotrade.alpaca.backtest.service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.ta4j.core.AnalysisCriterion;
import org.ta4j.core.BarSeries;
import org.ta4j.core.BarSeriesManager;
import org.ta4j.core.BaseBarSeries;
import org.ta4j.core.BaseStrategy;
import org.ta4j.core.Order;
import org.ta4j.core.Order.OrderType;
import org.ta4j.core.Strategy;
import org.ta4j.core.Trade;
import org.ta4j.core.TradingRecord;
import org.ta4j.core.analysis.criteria.ProfitLossPercentageCriterion;
import org.ta4j.core.num.Num;
import org.ta4j.core.num.PrecisionNum;

import com.algotrade.alpaca.backtest.DynamicTradingRule;
import com.algotrade.alpaca.backtest.pojo.BackTestRequest;
import com.algotrade.alpaca.backtest.pojo.BackTestResponse;
import com.algotrade.alpaca.backtest.pojo.BackTestTrade;
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

			BarSeries barSeries =marketDataService.getHistoricalMarketData(ticker,
				backTestRequest.getIntervalDuration(), 
				backTestRequest.getCandleCount(),
				startTime, 
				endTime);
		  seriesManager.setBarSeries(barSeries);
		  Strategy dynamicStrategy = buildDynamicTradeRule(backTestRequest, barSeries);
		  OrderType entryOrderType = Order.OrderType.BUY;
		  if(backTestRequest.getTradeStrategy().getEntrySignal().equalsIgnoreCase("sell")){
			 entryOrderType = Order.OrderType.SELL;
		  } 
	        TradingRecord tradingRecord = seriesManager.run(dynamicStrategy, entryOrderType,
	                PrecisionNum.valueOf(backTestRequest.getAmountUsed()));
	        AnalysisCriterion criterion = new ProfitLossPercentageCriterion();
	        Num profitOrLoss = criterion.calculate(barSeries, tradingRecord);

	        
	      return   buildBackTestResponse(tradingRecord, profitOrLoss, barSeries);

		  
	  }
	  
	  private Strategy buildDynamicTradeRule(BackTestRequest backTestRequest , BarSeries barSeries){
		  String entrySignal = backTestRequest.getTradeStrategy().getEntryConditions();
		  String exitSignal = backTestRequest.getTradeStrategy().getExitConditions();
		  
		  return new BaseStrategy(new DynamicTradingRule(barSeries, backTestRequest.getStockWatch(), entrySignal), 
				  new DynamicTradingRule(barSeries, backTestRequest.getStockWatch(), exitSignal));

	  }
	  
	  private BackTestResponse buildBackTestResponse(TradingRecord tradingRecord , Num profitOrLoss , BarSeries barSeries){
		   List<BackTestTrade> backTestTrades  = buildBackTradeList(tradingRecord , barSeries);
		   BackTestResponse backTestResponse = new BackTestResponse();
		   backTestResponse.setTrades(backTestTrades);
		   backTestResponse.setProfitPercentage(profitOrLoss.floatValue());
		   
		  return null;
	  }

	  private List<BackTestTrade> buildBackTradeList(TradingRecord tradingRecord , BarSeries barSeries) {
		  List<BackTestTrade> backTestTrades = new LinkedList<BackTestTrade>();
		  
		  tradingRecord.getTrades().forEach( trade -> {
			  BackTestTrade backTestTrade = new BackTestTrade();
			  backTestTrade.setEntrySignal(trade.getEntry().getType());
			  backTestTrade.setPriceAtEntry(trade.getEntry().getNetPrice().floatValue());
			  backTestTrade.setEntryTime(barSeries.getBar(trade.getEntry().getIndex()).getEndTime());
			  
			  backTestTrade.setExitSignal(trade.getExit().getType());
			  backTestTrade.setPriceAtEntry(trade.getExit().getNetPrice().floatValue());
			  backTestTrade.setExitTime(barSeries.getBar(trade.getExit().getIndex()).getEndTime());
			  backTestTrades.add(backTestTrade);
		  });
		  
		  return backTestTrades;
	  }
}
