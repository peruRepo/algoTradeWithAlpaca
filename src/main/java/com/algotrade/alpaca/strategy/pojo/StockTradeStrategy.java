package com.algotrade.alpaca.strategy.pojo;



public class StockTradeStrategy {
	private String ticker;
	private Integer interval;
	private TimeUnit timeUnit;
	private Integer quantity;
	private TradeStrategy tradeStrategy;
	private TradeStrategyState state;
	private StockWatch stockWatch;
	public String getTicker() {
		return ticker;
	}
	public void setTicker(String ticker) {
		this.ticker = ticker;
	}

	public TradeStrategyState getState() {
		return state;
	}
	public void setState(String state) {
		this.state = TradeStrategyState.valueOf(state);
	}
	public TradeStrategy getTradeStrategy() {
		return tradeStrategy;
	}
	public void setTradeStrategy(TradeStrategy tradeStrategy) {
		this.tradeStrategy = tradeStrategy;
	}

	public StockWatch getStockWatch() {
		return stockWatch;
	}
	public void setStockWatch(StockWatch stockWatch) {
		this.stockWatch = stockWatch;
	}

	public void setState(TradeStrategyState state) {
		this.state = state;
	}
	public Integer getInterval() {
		return interval;
	}
	public void setInterval(Integer interval) {
		this.interval = interval;
	}
	public String getTimeUnit() {
		return timeUnit.toString();
	}
	public void setTimeUnit(String timeUnit) {
		this.timeUnit = TimeUnit.valueOf(timeUnit);
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public void setTimeUnit(TimeUnit timeUnit) {
		this.timeUnit = timeUnit;
	}
}
