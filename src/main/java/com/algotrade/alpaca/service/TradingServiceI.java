package com.algotrade.alpaca.service;

import com.algotrade.alpaca.data.pojo.TradeOrder;

public interface TradingServiceI {

	public void buyStock(TradeOrder tradeOrder);
	public void sellStock(TradeOrder tradeOrder);
	
}
