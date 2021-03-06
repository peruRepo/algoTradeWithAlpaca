package com.algotrade.alpaca.backtest.service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.LinkedList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.ta4j.core.AnalysisCriterion;
import org.ta4j.core.BarSeries;
import org.ta4j.core.BarSeriesManager;
import org.ta4j.core.BaseStrategy;
import org.ta4j.core.Order;
import org.ta4j.core.Order.OrderType;
import org.ta4j.core.Strategy;
import org.ta4j.core.Trade;
import org.ta4j.core.TradingRecord;
import org.ta4j.core.analysis.criteria.ProfitLossPercentageCriterion;
import org.ta4j.core.num.DoubleNum;
import org.ta4j.core.num.Num;

import com.algotrade.alpaca.backtest.pojo.BackTestRequest;
import com.algotrade.alpaca.backtest.pojo.BackTestResponse;
import com.algotrade.alpaca.backtest.pojo.BackTestStrategy;
import com.algotrade.alpaca.backtest.pojo.BackTestTrade;
import com.algotrade.alpaca.backtest.repository.NitrateBackTestStrategyRepo;
import com.algotrade.alpaca.data.rest.client.TradingService;

import io.github.mainstringargs.alpaca.enums.BarsTimeFrame;

@Component
public class BackTestExecutorServiceImpl implements BackTestExecutorService {
	private static final Logger LOGGER = LoggerFactory.getLogger(BackTestExecutorServiceImpl.class);
	
    private BarSeriesManager seriesManager = new BarSeriesManager();
	
  
	 @Autowired 
	 private TradingService tradingService;
	  
	 @Autowired
	 private NitrateBackTestStrategyRepo nitrateBackTestStrategyRepo;
	 
	 @Value("${sync.url}")
	 private String syncURL;
	 
	 @Autowired
	 private RestTemplate restTemplate;
	  
	 private ZoneId TIMEZONE_ET = ZoneId.of("America/New_York");
	  
	  
	  public BackTestResponse executeStrategy(BackTestRequest backTestRequest) {
		  String ticker = backTestRequest.getTicker();
		   ZonedDateTime endTime = ZonedDateTime.now(TIMEZONE_ET);
		   ZonedDateTime startTime =  null;
			if(backTestRequest.getIntervalDuration().equals(BarsTimeFrame.ONE_DAY.toString())) {
				startTime = endTime.minus(700, ChronoUnit.DAYS);
			} else {
				startTime = endTime.minus(100, ChronoUnit.DAYS);
			}

			BarSeries barSeries = tradingService.getMarketData(ticker,
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
	        		DoubleNum.valueOf(backTestRequest.getQuantity()));
	        AnalysisCriterion criterion = new ProfitLossPercentageCriterion();
	        Num profitOrLossPercentage = criterion.calculate(barSeries, tradingRecord);

	        BackTestStrategy backTestStrategy = new BackTestStrategy();
	        backTestStrategy.setStrategyName(backTestRequest.getStrategyName());
	        backTestStrategy.setBackTestRequest(backTestRequest);
	        backTestStrategy.setProfitPercentage(profitOrLossPercentage.doubleValue());

	        
	        BackTestResponse backTestResponse  = addBackTradeList(tradingRecord , barSeries); 
	        backTestResponse.setProfitPercentage(profitOrLossPercentage.doubleValue());
	        backTestStrategy.setProfitOrLoss(backTestResponse.getProfitOrLoss().doubleValue());
			nitrateBackTestStrategyRepo.saveBackTestStrategy(backTestStrategy);
			syncStrategy(backTestRequest);
			return backTestResponse;
		  
	  }
	  
	  private Strategy buildDynamicTradeRule(BackTestRequest backTestRequest , BarSeries barSeries){
		  String entrySignal = backTestRequest.getTradeStrategy().getEntryConditions();
		  String exitSignal = backTestRequest.getTradeStrategy().getExitConditions();
		  
		  return new BaseStrategy(new DynamicTradingRule(barSeries, backTestRequest.getStockWatch(), entrySignal), 
				  new DynamicTradingRule(barSeries, backTestRequest.getStockWatch(), exitSignal));

	  }
	  

	  private BackTestResponse addBackTradeList(TradingRecord tradingRecord , BarSeries barSeries) {
		  List<BackTestTrade> backTestTrades = new LinkedList<BackTestTrade>();
		  BackTestResponse backTestResponse = new BackTestResponse();
		   backTestResponse.setTrades(backTestTrades);
		   Double profitOrLoss = 0.0;

		   
		   for(Trade trade : tradingRecord.getTrades()) {
			   BackTestTrade backTestTrade = new BackTestTrade();
				  backTestTrade.setEntrySignal(trade.getEntry().getType());
				  backTestTrade.setPriceAtEntry(trade.getEntry().getNetPrice().floatValue());
				  backTestTrade.setEntryTime(barSeries.getBar(trade.getEntry().getIndex()).getEndTime());
				  
				  backTestTrade.setExitSignal(trade.getExit().getType());
				  backTestTrade.setPriceAtExit(trade.getExit().getNetPrice().floatValue());
				  backTestTrade.setExitTime(barSeries.getBar(trade.getExit().getIndex()).getEndTime());
				  profitOrLoss = trade.getProfit().floatValue() + profitOrLoss;
				  backTestTrade.setProfitOrLoss(trade.getProfit().floatValue());
				  backTestTrades.add(backTestTrade);
		   }

		   backTestResponse.setProfitOrLoss(profitOrLoss);
		   
		  return backTestResponse;
	  }

	private void syncStrategy(BackTestRequest backTestRequest) {
		try {
		restTemplate.postForObject(syncURL, backTestRequest, String.class);
		} catch(Exception ex) {
			LOGGER.error("Exception happend while trying to sync the back test strategy",ex);
		}
	}

	@Override
	public void storeStrategy(BackTestStrategy backTestStrategy) {
		nitrateBackTestStrategyRepo.saveBackTestStrategy(backTestStrategy);
	}


}
