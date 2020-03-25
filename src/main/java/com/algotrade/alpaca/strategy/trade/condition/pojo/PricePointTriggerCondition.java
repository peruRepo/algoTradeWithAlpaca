package com.algotrade.alpaca.strategy.trade.condition.pojo;


import com.algotrade.alpaca.data.repository.MarketDataRepo;
import com.algotrade.alpaca.strategy.trade.condition.BaseTradeCondition;
import com.algotrade.alpaca.strategy.trade.condition.TradeCondition;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import springfox.documentation.swagger.web.SwaggerApiListingReader;

@JsonDeserialize(as = PricePointTriggerCondition.class)
public class PricePointTriggerCondition extends BaseTradeCondition {
	private String triggerName;
	private String ticker;
	private Double price;
	private EvaluationExpression expression;

	@JsonIgnore
	@Override
	public Boolean evaluate(MarketDataRepo marketDataRepo) {
		return false;
	}
	public String getTicker() {
		return ticker;
	}
	public void setTicker(String ticker) {
		this.ticker = ticker;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public EvaluationExpression getExpression() {
		return expression;
	}
	public void setExpression(EvaluationExpression expression) {
		this.expression = expression;
	}
	public String getTriggerName() {
		return triggerName;
	}
	public void setTriggerName(String triggerName) {
		this.triggerName = triggerName;
	}


}
