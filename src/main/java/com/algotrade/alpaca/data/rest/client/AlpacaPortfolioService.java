package com.algotrade.alpaca.data.rest.client;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.algotrade.alpaca.service.PortfolioServiceI;
import com.algotrade.alpaca.strategy.exception.AlpacaAPIException;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.order.Order;
import io.github.mainstringargs.domain.alpaca.portfoliohistory.PortfolioHistory;
import io.github.mainstringargs.domain.alpaca.position.Position;

@Component
public class AlpacaPortfolioService  implements  PortfolioServiceI{

	private static final Logger logger = LoggerFactory.getLogger(AlpacaPortfolioService.class);
	
	@Autowired
	private AlpacaAPI alpacaAPI ;
	
	

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

	@Override
	public ArrayList<Position> getOpenPositions() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Position getOpenPosition(String ticker) {
		Position position = null;
		try {
			position = alpacaAPI.getOpenPositionBySymbol(ticker);
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while getting open position for "+ticker+ " and exception is =" ,e);
			throw new AlpacaAPIException(e.getMessage());
		}
		return position;
	}

}
