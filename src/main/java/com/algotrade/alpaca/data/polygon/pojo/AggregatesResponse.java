package com.algotrade.alpaca.data.polygon.pojo;

import java.util.List;

/*
 * 
 * {
  "ticker": "AAPL",
  "status": "OK",
  "adjusted": true,
  "queryCount": 55,
  "resultsCount": 2,
  "results": [
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
}
 */
public class AggregatesResponse {
	private String ticker;
	private String status;
	private boolean adjusted;
	private Integer queryCount;
	private Integer resultsCount;
	
	private List<AggregateResult> results;

	public String getTicker() {
		return ticker;
	}

	public void setTicker(String ticker) {
		this.ticker = ticker;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public boolean isAdjusted() {
		return adjusted;
	}

	public void setAdjusted(boolean adjusted) {
		this.adjusted = adjusted;
	}

	public Integer getQueryCount() {
		return queryCount;
	}

	public void setQueryCount(Integer queryCount) {
		this.queryCount = queryCount;
	}

	public Integer getResultsCount() {
		return resultsCount;
	}

	public void setResultsCount(Integer resultsCount) {
		this.resultsCount = resultsCount;
	}

	public List<AggregateResult> getResults() {
		return results;
	}

	public void setResults(List<AggregateResult> results) {
		this.results = results;
	}
	
}
