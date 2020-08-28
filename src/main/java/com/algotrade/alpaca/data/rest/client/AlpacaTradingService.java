package com.algotrade.alpaca.data.rest.client;

import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.ta4j.core.BarSeries;

import com.algotrade.alpaca.data.pojo.TradeOrder;
import com.algotrade.alpaca.data.pojo.TradeOrderResponse;
import com.algotrade.alpaca.data.ta4j.AlpacaTa4jAdapter;
import com.algotrade.alpaca.strategy.exception.AlpacaAPIException;
import com.algotrade.alpaca.strategy.exception.MarketDataException;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.enums.BarsTimeFrame;
import io.github.mainstringargs.alpaca.enums.Direction;
import io.github.mainstringargs.alpaca.enums.OrderSide;
import io.github.mainstringargs.alpaca.enums.OrderStatus;
import io.github.mainstringargs.alpaca.enums.OrderTimeInForce;
import io.github.mainstringargs.alpaca.enums.PortfolioPeriodUnit;
import io.github.mainstringargs.alpaca.enums.PortfolioTimeFrame;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.alpaca.websocket.client.AlpacaWebsocketClient;
import io.github.mainstringargs.alpaca.websocket.listener.AlpacaStreamListener;
import io.github.mainstringargs.domain.alpaca.account.Account;
import io.github.mainstringargs.domain.alpaca.accountconfiguration.AccountConfiguration;
import io.github.mainstringargs.domain.alpaca.bar.Bar;
import io.github.mainstringargs.domain.alpaca.order.Order;
import io.github.mainstringargs.domain.alpaca.portfoliohistory.PortfolioHistory;
import io.github.mainstringargs.domain.alpaca.position.Position;

@Component
public class AlpacaTradingService implements TradingService {

	private static final Logger logger = LoggerFactory.getLogger(AlpacaTradingService.class);
	private static final ZoneId TIMEZONE_ET = ZoneId.of("America/New_York");

	@Autowired
	private TradingServiceProvider<AlpacaAPI, AlpacaWebsocketClient> tradingServiceProvider;

	private AlpacaAPI alpacaAPI;

	@PostConstruct
	private void setAlpacaAPI() throws TradingServiceProviderException {
		this.alpacaAPI = tradingServiceProvider.getTradingAPI();
	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public TradeOrderResponse buyStock(TradeOrder tradeOrder) {
		Order order = null;
		try {
			order = alpacaAPI.requestNewMarketOrder(tradeOrder.getTicker(), tradeOrder.getQuantity(), OrderSide.BUY,
					OrderTimeInForce.DAY, false);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while executing buy order  and exception is ", e);
		}
		TradeOrderResponse tradeOrderResponse = new TradeOrderResponse();
		tradeOrderResponse.setId(order.getId());
		tradeOrderResponse.setStatus(order.getStatus());
		return tradeOrderResponse;
	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public TradeOrderResponse sellStock(TradeOrder tradeOrder) {
		Order order = null;
		try {
			order = alpacaAPI.requestNewMarketOrder(tradeOrder.getTicker(), tradeOrder.getQuantity(), OrderSide.SELL,
					OrderTimeInForce.DAY, false);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while executing buy order  and exception is ", e);
		}
		TradeOrderResponse tradeOrderResponse = new TradeOrderResponse();
		tradeOrderResponse.setId(order.getId());
		tradeOrderResponse.setStatus(order.getStatus());
		return tradeOrderResponse;

	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public List<Position> getOpenPositions() {
		try {
			return alpacaAPI.getOpenPositions();
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while getting open positions  and exception is =", e);
			throw new AlpacaAPIException(e.getMessage());
		}
	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public Position getOpenPositionBySymbol(String ticker) {
		Position position = null;
		try {
			position = alpacaAPI.getOpenPositionBySymbol(ticker);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while getting open position for " + ticker + " and exception is =", e);
			throw new AlpacaAPIException(e.getMessage());
		}
		return position;
	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public List<Order> getOrders(Integer days, Integer maximumResult) {

		ZonedDateTime currentTime = ZonedDateTime.now(TIMEZONE_ET);
		ZonedDateTime startTime = currentTime.minus(days, ChronoUnit.DAYS);

		try {
			return alpacaAPI.getOrders(OrderStatus.ALL, maximumResult, startTime, currentTime, Direction.DESCENDING,
					false);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while getting recently executed orders  and exception is =", e);
			throw new AlpacaAPIException(e.getMessage());
		}

	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public Account getAccount() {
		try {
			return alpacaAPI.getAccount();
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while getting account  and exception is =", e);
			throw new AlpacaAPIException(e.getMessage());
		}
	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public BarSeries getMarketData(String ticker, String candleDuration, Integer candleCount, ZonedDateTime startTime,
			ZonedDateTime endTime) {
		BarsTimeFrame timeFrame = BarsTimeFrame.valueOf(candleDuration);
		if (candleDuration.equals(BarsTimeFrame.ONE_DAY.toString())) {
			try {
				Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, candleCount, startTime, endTime,
						null, null);
				return AlpacaTa4jAdapter.generateBars(bars.get(ticker), Duration.ofDays(1));
			} catch (AlpacaAPIRequestException e) {
				logger.error("Exception happend while trying to get Alpaca market data and execption is =", e);
				throw new MarketDataException("Error while fetching AlpcaMarket data");
			}
		} else {

			return aggregateBarSeriesData(ticker, candleDuration, startTime, endTime);
		}

	}

	
	private BarSeries aggregateBarSeriesData(String ticker, String candleDuration, ZonedDateTime startTime,
			ZonedDateTime endTime) {
		LinkedList<Bar> aggregatedbars = new LinkedList<Bar>();
		// ZonedDateTime maxEndTime = ZonedDateTime.now(TIMEZONE_ET);
		// ZonedDateTime startTimeAfter = maxEndTime.minus(360, ChronoUnit.DAYS);
		Integer daysOfData = 1;
		Integer maxCandleCount = 1000;
		Integer workingHoursPerDay = 8;
		BarsTimeFrame timeFrame = null;
		if (candleDuration.equals(BarsTimeFrame.FIVE_MINUTE.toString())) {
			timeFrame = BarsTimeFrame.FIVE_MINUTE;
			daysOfData = (maxCandleCount / 12) / 8;
		} else if (candleDuration.equals(BarsTimeFrame.ONE_MIN.toString())) {
			timeFrame = BarsTimeFrame.ONE_MIN;
			daysOfData = (maxCandleCount / 60) / 8;
		} else if (candleDuration.equals(BarsTimeFrame.FIFTEEN_MINUTE.toString())) {
			timeFrame = BarsTimeFrame.FIFTEEN_MINUTE;
			daysOfData = (maxCandleCount / 4) / 8;
		}
		ZonedDateTime startTimeAfter = startTime;
		ZonedDateTime endTimeUntil = startTimeAfter.plusDays(daysOfData);
		boolean endOfTimeReached = false;
		while (!endOfTimeReached) {
			try {
				Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, maxCandleCount, null, null,
						startTimeAfter, endTimeUntil);
				if (bars != null) {
					aggregatedbars.addAll(bars.get(ticker));
					startTimeAfter = ZonedDateTime.ofInstant(Instant.ofEpochSecond(aggregatedbars.getLast().getT()),
							ZoneId.systemDefault());
					endTimeUntil = endTimeUntil.plusDays(daysOfData);
					if (endTimeUntil.isAfter(endTime)) {
						endOfTimeReached = true;
					}
				} else {
					endOfTimeReached = true;
				}
			} catch (AlpacaAPIRequestException e) {
				throw new MarketDataException("Error while fetching AlpcaMarket data");
			}

		}
		return AlpacaTa4jAdapter.generateBars(aggregatedbars, Duration.ofMinutes(1));
	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public BarSeries getMarketDataForGivenDuration(String ticker, String candleDuration, Integer candleCount) {
		BarsTimeFrame timeFrame = BarsTimeFrame.valueOf(candleDuration);
		ZonedDateTime currentTime = ZonedDateTime.now(TIMEZONE_ET);
		TemporalUnit unit = null;
		Duration duration = null;

		if (candleDuration.equals(BarsTimeFrame.ONE_DAY.toString())) {
			unit = ChronoUnit.DAYS;
			duration = Duration.ofDays(1);
		} else if (candleDuration.equals(BarsTimeFrame.FIFTEEN_MINUTE.toString())) {
			unit = ChronoUnit.MINUTES;
			duration = Duration.ofMinutes(15);
		} else if (candleDuration.equals(BarsTimeFrame.FIVE_MINUTE.toString())) {
			unit = ChronoUnit.MINUTES;
			duration = Duration.ofMinutes(5);
		} else if (candleDuration.equals(BarsTimeFrame.ONE_MIN.toString())) {
			unit = ChronoUnit.MINUTES;
			duration = Duration.ofMinutes(1);
		}

		ZonedDateTime startTime = currentTime.minus(candleCount, unit);
		try {
			Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(timeFrame, ticker, candleCount, startTime, currentTime,
					null, null);
			return AlpacaTa4jAdapter.generateBars(bars.get(ticker), duration);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happend while trying to get Alpaca market data and execption is =", e);
			throw new MarketDataException("Error while fetching AlpcaMarket data");
		}
	}

	@Override
	public void setAccountConfiguration(AccountConfiguration accountConfiguration) {
		try {
			alpacaAPI.setAccountConfiguration(accountConfiguration);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happend while trying to set Account configuration "
					+ " and exception is=", e);
		}
	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public Order getOrder(String orderId) {
		Order order = null;
		try {
			order = alpacaAPI.getOrder(orderId, false);
		} catch (AlpacaAPIRequestException e) {
		logger.error("Exception happend while trying to get the Order status for the orderId="+orderId+" and exception is=",e);
		}
		return order;
	}
    private List<AlpacaStreamListener> listeners = new LinkedList<AlpacaStreamListener>();
    
	@Override
	public void regsiterListener(AlpacaStreamListener listener) {
		 listeners.add(listener);
		 this.alpacaWebsocketClient.addListener(listener);
	}
	
	private AlpacaWebsocketClient alpacaWebsocketClient;
	
	@Scheduled(initialDelay=2000, fixedDelay = 1200000)
	public void refreshWebSocketConnection() {
		if(this.alpacaWebsocketClient != null &&  this.alpacaWebsocketClient.isConnected()){
			this.alpacaWebsocketClient.disconnect();
		}
		try {
			this.alpacaWebsocketClient = tradingServiceProvider.getWebSocketClientAPI();
		} catch (TradingServiceProviderException e) {
			logger.error("Exception happend while trying to get WebSocket client and exception is=",e);
		}
		this.alpacaWebsocketClient.connect();
		for(AlpacaStreamListener listener : listeners){
			this.alpacaWebsocketClient.addListener(listener);
		}
	}
	
	@PostConstruct
	private void setWebSocketClient() throws TradingServiceProviderException {
		try {
			this.alpacaWebsocketClient = tradingServiceProvider.getWebSocketClientAPI();
		} catch (TradingServiceProviderException e) {
			logger.error("Exception happend while trying to get WebSocket client and exception is=",e);
			throw e;
		}
	}

	@Override
	@HystrixCommand(commandKey="alpaca", threadPoolKey = "alpaca")
	public PortfolioHistory getProPortfolioHistory(Integer periodLength) {
		PortfolioPeriodUnit alpacaPeriodUnit = PortfolioPeriodUnit.MONTH;
        PortfolioTimeFrame timeFrame = PortfolioTimeFrame.ONE_DAY;
        LocalDate dateEnd = null;
        Boolean extendedHours = null;
		try {
			return alpacaAPI.getPortfolioHistory(periodLength , alpacaPeriodUnit, timeFrame, dateEnd, extendedHours);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happend while trying to get Portfolio history and exception is=",e);
		}
		
		return null;
	}

}