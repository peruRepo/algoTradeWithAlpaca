package com.algotrade.alpaca.data.polygon.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;

/*
 *   "results": [
    {
      "T": "AAPL",
      "v": 31315282,
      "o": 102.87,
      "c": 103.74,
      "h": 103.82,
      "l": 102.65,
      "t": 1549314000000,
      "n": 4
    }
  ]
 */
public class AggregateResult {
	@JsonProperty("T")
	private String ticker;
	@JsonProperty("v")
	private Long volume;
	@JsonProperty("o")
	private Double open;
	@JsonProperty("c")
	private Double close;
	@JsonProperty("h")
	private Double high;
	@JsonProperty("l")
	private Double low;
	@JsonProperty("t")
	private long timeStamp;
	@JsonProperty("n")
	private Integer numberOfTrades;
	
	public String getTicker() {
		return ticker;
	}
	public void setTicker(String ticker) {
		this.ticker = ticker;
	}
	public Long getVolume() {
		return volume;
	}
	public void setVolume(Long volume) {
		this.volume = volume;
	}
	public Double getOpen() {
		return open;
	}
	public void setOpen(Double open) {
		this.open = open;
	}
	public Double getClose() {
		return close;
	}
	public void setClose(Double close) {
		this.close = close;
	}
	public Double getHigh() {
		return high;
	}
	public void setHigh(Double high) {
		this.high = high;
	}
	public Double getLow() {
		return low;
	}
	public void setLow(Double low) {
		this.low = low;
	}
	public long getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(long timeStamp) {
		this.timeStamp = timeStamp;
	}
	public Integer getNumberOfTrades() {
		return numberOfTrades;
	}
	public void setNumberOfTrades(Integer numberOfTrades) {
		this.numberOfTrades = numberOfTrades;
	}
}
