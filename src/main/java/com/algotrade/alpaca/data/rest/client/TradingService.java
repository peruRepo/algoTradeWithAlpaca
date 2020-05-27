package com.algotrade.alpaca.data.rest.client;

import java.time.ZonedDateTime;
import java.util.List;

import org.ta4j.core.BarSeries;

import com.algotrade.alpaca.data.pojo.TradeOrder;
import com.algotrade.alpaca.data.pojo.TradeOrderResponse;

import io.github.mainstringargs.alpaca.websocket.listener.AlpacaStreamListener;
import io.github.mainstringargs.domain.alpaca.account.Account;
import io.github.mainstringargs.domain.alpaca.accountconfiguration.AccountConfiguration;
import io.github.mainstringargs.domain.alpaca.order.Order;
import io.github.mainstringargs.domain.alpaca.position.Position;


public interface TradingService {

	public TradeOrderResponse buyStock(TradeOrder tradeOrder);
	public TradeOrderResponse sellStock(TradeOrder tradeOrder);
	public List<Position> getOpenPositions();
	public Position getOpenPositionBySymbol(String symbol);
	public List<Order> getOrders(Integer days, Integer maximumResult);
	public Order getOrder(String orderId);
	public Account getAccount();
	public void setAccountConfiguration(AccountConfiguration accountConfiguration);
	public BarSeries getMarketData(
			String ticker, 
			String candleDuration,
			Integer candleCount,
			ZonedDateTime startTime ,
			ZonedDateTime endTime);

	public BarSeries getMarketDataForGivenDuration(
			String ticker, 
			String candleDuration,
			Integer candleCount);
	
	public void regsiterListener(AlpacaStreamListener listener);
	
}
