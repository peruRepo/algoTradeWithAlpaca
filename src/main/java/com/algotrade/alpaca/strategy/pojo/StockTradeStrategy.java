package com.algotrade.alpaca.strategy.pojo;

import java.util.Set;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;


public class StockTradeStrategy {
	private String ticker;
	private Set<TradeStrategy> tradeStrategies;
	private TradeStrategyState state;
	public String getTicker() {
		return ticker;
	}
	public void setTicker(String ticker) {
		this.ticker = ticker;
	}
	public Set<TradeStrategy> getTradeStrategy() {
		return tradeStrategies;
	}
	public void setTradeStrategy(Set<TradeStrategy> tradeStrategies) {
		this.tradeStrategies = tradeStrategies;
	}
	public void addTradeStrategy(TradeStrategy tradeStrategy) {
		this.tradeStrategies.add(tradeStrategy);
	}

	
}
