package com.algotrade.alpaca.event;

import org.springframework.context.ApplicationEvent;

import io.github.mainstringargs.domain.alpaca.websocket.trade.TradeUpdateMessage;

public class AlpaceTradeUpdateEvent extends ApplicationEvent {
	

	public AlpaceTradeUpdateEvent(TradeUpdateMessage tradeUpdateMessage) {
		super(tradeUpdateMessage);
		this.tradeUpdateMessage =  tradeUpdateMessage;
	}

	private TradeUpdateMessage tradeUpdateMessage;

	public TradeUpdateMessage getTradeUpdateMessage() {
		return tradeUpdateMessage;
	}

	public void setTradeUpdateMessage(TradeUpdateMessage tradeUpdateMessage) {
		this.tradeUpdateMessage = tradeUpdateMessage;
	}
}
