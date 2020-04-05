package com.algotrade.alpaca.service;

import io.github.mainstringargs.domain.alpaca.order.Order;
import io.github.mainstringargs.domain.alpaca.portfoliohistory.PortfolioHistory;

public interface PortfolioServiceI {


	public Order getOrderById(String orderId);
	public PortfolioHistory getPortFolio();
}
