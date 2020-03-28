package com.algotrade.alpaca.strategy.pojo;



public class StockTradeStrategy1 {
	private String ticker;
	private Integer interval;
	private TimeUnit timeUnit;
	private TradeStrategy tradeStrategy;
	private TradeStrategyState state;
	public String getTicker() {
		return ticker;
	}
	public void setTicker(String ticker) {
		this.ticker = ticker;
	}

	public TradeStrategyState getState() {
		return state;
	}
	public void setState(TradeStrategyState state) {
		this.state = state;
	}
	public TradeStrategy getTradeStrategy() {
		return tradeStrategy;
	}
	public void setTradeStrategy(TradeStrategy tradeStrategy) {
		this.tradeStrategy = tradeStrategy;
	}
	public Integer getInterval() {
		return interval;
	}
	public void setInterval(Integer interval) {
		this.interval = interval;
	}
	public TimeUnit getTimeUnit() {
		return timeUnit;
	}
	public void setTimeUnit(TimeUnit timeUnit) {
		this.timeUnit = timeUnit;
	}
}
