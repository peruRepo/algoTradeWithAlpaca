package com.algotrade.alpaca.backtest.pojo;

import org.dizitart.no2.IndexType;
import org.dizitart.no2.objects.Index;
import org.dizitart.no2.objects.Indices;

@Indices({
    @Index(value = "strategyName", type = IndexType.Unique)
})
public class BackTestStrategy {
	
	private String strategyName;
	private BackTestRequest backTestRequest;
	private Double profitOrLoss;
	private Double profitPercentage;
	
	public String getStrategyName() {
		return strategyName;
	}
	public void setStrategyName(String strategyName) {
		this.strategyName = strategyName;
	}
	public BackTestRequest getBackTestRequest() {
		return backTestRequest;
	}
	public void setBackTestRequest(BackTestRequest backTestRequest) {
		this.backTestRequest = backTestRequest;
	}
	public Double getProfitOrLoss() {
		return profitOrLoss;
	}
	public void setProfitOrLoss(Double profitOrLoss) {
		this.profitOrLoss = profitOrLoss;
	}
	public Double getProfitPercentage() {
		return profitPercentage;
	}
	public void setProfitPercentage(Double profitPercentage) {
		this.profitPercentage = profitPercentage;
	}
	
}
