package com.algotrade.alpaca.event;

import org.springframework.context.ApplicationEvent;

import io.github.mainstringargs.domain.alpaca.order.Order;

public class AlpaceTradeUpdateEvent extends ApplicationEvent {
	
	private Order order;

	public AlpaceTradeUpdateEvent(Order order) {
		super(order);
		this.order =  order;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
}
