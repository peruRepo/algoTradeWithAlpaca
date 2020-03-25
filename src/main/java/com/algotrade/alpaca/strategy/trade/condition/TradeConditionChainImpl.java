package com.algotrade.alpaca.strategy.trade.condition;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.algotrade.alpaca.data.repository.MarketDataRepo;

@Component
public class TradeConditionChainImpl implements TradeConditionChain {
	
	@Autowired
	private MarketDataRepo polygonMarketDataRepo;
	
	@Override
	public Boolean evaluateCondition(List<TradeCondition> tradingConditions) {
		for(TradeCondition tradeCondition : tradingConditions){
			if(!tradeCondition.evaluate(polygonMarketDataRepo)){
				return false;
			}
		}
		return true;
	}

}
