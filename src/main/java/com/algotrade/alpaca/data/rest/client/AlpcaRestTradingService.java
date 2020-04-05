package com.algotrade.alpaca.data.rest.client;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.algotrade.alpaca.data.pojo.TradeOrder;
import com.algotrade.alpaca.service.PortfolioServiceI;
import com.algotrade.alpaca.service.TradingServiceI;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.enums.OrderSide;
import io.github.mainstringargs.alpaca.enums.OrderTimeInForce;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.order.Order;
import io.github.mainstringargs.domain.alpaca.portfoliohistory.PortfolioHistory;

@Component("tradingService")
public class AlpcaRestTradingService implements TradingServiceI, PortfolioServiceI {
	private static final Logger logger = LoggerFactory.getLogger(AlpcaRestTradingService.class);
	
	@Value("${polygon.host}")
	private String polygonHost;
	
	@Autowired
	private AlpacaAPI alpacaAPI ;
	

	@Override
	public Order buyStock(TradeOrder tradeOrder) {
		Order order = null;
		try {
			order = alpacaAPI.requestNewMarketOrder(tradeOrder.getTicker(), tradeOrder.getQuantity(), OrderSide.BUY, OrderTimeInForce.DAY, false);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while executing buy order  and exception is ",e);
		}
		return order;
	}

	@Override
	public Order sellStock(TradeOrder tradeOrder) {
		Order order = null;
		try {
			order = alpacaAPI.requestNewMarketOrder(tradeOrder.getTicker(), tradeOrder.getQuantity(), OrderSide.SELL, OrderTimeInForce.DAY, false);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while executing Sell order  and exception is ",e);
		}
		return order;
		
	}


	@Override
	public Order getOrderById(String orderId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PortfolioHistory getPortFolio() {
		// TODO Auto-generated method stub
		return null;
	}
}
