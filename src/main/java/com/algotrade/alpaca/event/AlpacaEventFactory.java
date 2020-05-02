package com.algotrade.alpaca.event;

import java.util.concurrent.ConcurrentHashMap;
import java.util.function.BiConsumer;

import javax.annotation.PostConstruct;

import org.hibernate.validator.internal.util.logging.Log_.logger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.alpaca.websocket.listener.AlpacaStreamListenerAdapter;
import io.github.mainstringargs.alpaca.websocket.message.AlpacaStreamMessageType;
import io.github.mainstringargs.domain.alpaca.order.Order;
import io.github.mainstringargs.domain.alpaca.websocket.AlpacaStreamMessage;
import io.github.mainstringargs.domain.alpaca.websocket.trade.TradeUpdateMessage;

@Component
public class AlpacaEventFactory {
	
	private static Logger logger = LoggerFactory.getLogger(AlpacaEventFactory.class);
	@Autowired
	private AlpacaAPI alpacaAPI;
	
    @Autowired
    private ApplicationEventPublisher applicationEventPublisher;
    
	@Autowired 
	private ConcurrentHashMap<String, String> pendingOrderRegistry;
	
	
    @PostConstruct
	public void listenAndPropagateAlpacaEvent(){
        alpacaAPI.addAlpacaStreamListener(new AlpacaStreamListenerAdapter(
                AlpacaStreamMessageType.ACCOUNT_UPDATES,
                AlpacaStreamMessageType.TRADE_UPDATES) {
            @Override
            public void onStreamUpdate(AlpacaStreamMessageType streamMessageType, AlpacaStreamMessage streamMessage) {
                switch (streamMessageType) {
                    case TRADE_UPDATES:
                        TradeUpdateMessage tradeUpdateMessage = (TradeUpdateMessage) streamMessage;
                        AlpaceTradeUpdateEvent event = new AlpaceTradeUpdateEvent(tradeUpdateMessage.getData().getOrder());
                        applicationEventPublisher.publishEvent(event);
                        break;
                }
            }
        });
	}
    
    
    @Scheduled(fixedDelay = 300000)
    public void checkPendingOrderRegistry(){
    	 for(String orderId : pendingOrderRegistry.keySet()){
    		 try {
				Order order = alpacaAPI.getOrder(orderId, false);
				if( order.getStatus().equalsIgnoreCase("filled") || 
						order.getStatus().equalsIgnoreCase("cancelled") ||
						order.getStatus().equalsIgnoreCase("expired")){
					logger.info("Order for the ticker="+order.getSymbol()+" is "+order.getStatus());
					pendingOrderRegistry.remove(orderId);
					AlpaceTradeUpdateEvent event = new AlpaceTradeUpdateEvent(order);
					applicationEventPublisher.publishEvent(event);
				}
			} catch (AlpacaAPIRequestException e) {
				logger.error("Exception happend while trying to get the Order status for the orderId="+orderId+" and exception is=",e);
			}
    	 }

    }
}
