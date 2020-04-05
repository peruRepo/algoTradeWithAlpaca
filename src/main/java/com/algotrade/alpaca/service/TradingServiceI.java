package com.algotrade.alpaca.service;

import com.algotrade.alpaca.data.pojo.TradeOrder;

import io.github.mainstringargs.domain.alpaca.order.Order;

public interface TradingServiceI {

	public Order buyStock(TradeOrder tradeOrder);
	public Order sellStock(TradeOrder tradeOrder);
	
}
