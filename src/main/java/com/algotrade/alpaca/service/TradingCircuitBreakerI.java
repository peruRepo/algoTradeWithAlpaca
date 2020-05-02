package com.algotrade.alpaca.service;

import io.github.mainstringargs.domain.alpaca.order.Order;

public interface TradingCircuitBreakerI {

	public boolean allowedToEnterTrade();

}
