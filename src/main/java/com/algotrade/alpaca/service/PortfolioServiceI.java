package com.algotrade.alpaca.service;

import java.text.DecimalFormat;
import java.util.ArrayList;

import io.github.mainstringargs.domain.alpaca.order.Order;
import io.github.mainstringargs.domain.alpaca.portfoliohistory.PortfolioHistory;
import io.github.mainstringargs.domain.alpaca.position.Position;

public interface PortfolioServiceI {

	public Order getOrderById(String orderId);
	public PortfolioHistory getPortFolio();
	public ArrayList<Position> getOpenPositions();
	public Position getOpenPosition(String ticker);
	public ArrayList<Order> getRecentOrders(Integer days , Integer maximumResult);

}
