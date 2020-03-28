package com.algotrade.alpaca.strategy.pojo;



public class StockTradeStrategy {
	private String ticker;
	private TimeInterval timeInterval;
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
	public String getTimeInterval() {
		return timeInterval.toString();
	}
	public void setTimeInterval(String timeInterval) {
		this.timeInterval = TimeInterval.valueOf(timeInterval);
	}
	public void setState(TradeStrategyState state) {
		this.state = state;
	}
}
