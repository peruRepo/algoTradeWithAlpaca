package com.algotrade.alpaca.strategy.trade.condition;

import com.algotrade.alpaca.data.repository.MarketDataRepo;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize
public interface TradeCondition {
	public Boolean evaluate(MarketDataRepo marketDataRepo);
}
