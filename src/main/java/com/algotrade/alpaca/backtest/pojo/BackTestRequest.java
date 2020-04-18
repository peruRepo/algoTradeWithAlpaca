package com.algotrade.alpaca.backtest.pojo;

import com.algotrade.alpaca.strategy.pojo.StockWatch;
import com.algotrade.alpaca.strategy.pojo.TimeUnit;
import com.algotrade.alpaca.strategy.pojo.TradeStrategy;
import com.algotrade.alpaca.strategy.pojo.TradeStrategyState;

public class BackTestRequest {

	private String ticker;
	private Integer quantity;
	private String intervalDuration;
	private TradeStrategy tradeStrategy;
	private StockWatch stockWatch;
	private Integer candleCount;
	
	public String getTicker() {
		return ticker;
	}
	public void setTicker(String ticker) {
		this.ticker = ticker;
	}

	public String getIntervalDuration() {
		return intervalDuration;
	}
	public void setIntervalDuration(String intervalDuration) {
		this.intervalDuration = intervalDuration;
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
	public Integer getCandleCount() {
		return candleCount;
	}
	public void setCandleCount(Integer candleCount) {
		this.candleCount = candleCount;
	}

	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	
	
}
