package com.algotrade.alpaca.event;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.algotrade.alpaca.data.repository.TradeStrategyRepo;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.algotrade.alpaca.strategy.pojo.TradeStrategyState;

import io.github.mainstringargs.domain.alpaca.websocket.trade.TradeUpdateMessage;

@Component
public class TradeStatusEventListener {
	private static final Logger logger = LoggerFactory.getLogger(TradeStatusEventListener.class);
	
	@Autowired
	private TradeStrategyRepo tradeStrategyRepo;
	
	@EventListener
	public void listen(AlpaceTradeUpdateEvent alpaceTradeUpdateEvent){
		TradeUpdateMessage tradeUpdateMessage = alpaceTradeUpdateEvent.getTradeUpdateMessage();
		StockTradeStrategy strategy = tradeStrategyRepo.getStrategy(tradeUpdateMessage.getData().getOrder().getSymbol());
		logger.info("Trade event received for " +tradeUpdateMessage.getData().getOrder().getSymbol() + " and Event is " + tradeUpdateMessage.getData().getOrder().getStatus());
		if (tradeUpdateMessage.getData().getOrder().getStatus().equalsIgnoreCase("filled")) { 
			if(strategy.getState().equals(TradeStrategyState.ENTRY_ORDER_PENDING)){
				strategy.setState(TradeStrategyState.ENTERED);
			} else if(strategy.getState().equals(TradeStrategyState.EXIT_ORDER_PENDING)) {
				strategy.setState(TradeStrategyState.COMPLETED);
			}
			
		} else if(tradeUpdateMessage.getData().getOrder().getStatus().equalsIgnoreCase("canceled") ||
				tradeUpdateMessage.getData().getOrder().getStatus().equalsIgnoreCase("expired")) {
			if(strategy.getState().equals(TradeStrategyState.ENTRY_ORDER_PENDING)){
				strategy.setState(TradeStrategyState.WATCHING);
			} else if(strategy.getState().equals(TradeStrategyState.EXIT_ORDER_PENDING)) {
				strategy.setState(TradeStrategyState.ENTERED);
			}
		}
		
	}
}
