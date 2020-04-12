package com.algotrade.alpaca.strategy.pojo;

import java.io.Serializable;
import org.dizitart.no2.objects.Indices;
import org.dizitart.no2.objects.Index;
import org.dizitart.no2.IndexType;

@Indices({
    @Index(value = "ticker", type = IndexType.Unique)
})
public class StockTradeStrategy implements Serializable {

	private static final long serialVersionUID = 717926579496269439L;

	private String ticker;
	private Integer quantity;
	private Integer interval;
	private TimeUnit timeUnit;
	private String intervalDuration;
	private TradeStrategy tradeStrategy;
	private TradeStrategyState state;
	private StockWatch stockWatch;
	private Integer candleCount;
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
	public String getIntervalDuration() {
		return intervalDuration;
	}
	public void setIntervalDuration(String intervalDuration) {
		this.intervalDuration = intervalDuration;
	}
	public Integer getCandleCount() {
		return candleCount;
	}
	public void setCandleCount(Integer candleCount) {
		this.candleCount = candleCount;
	}
}
