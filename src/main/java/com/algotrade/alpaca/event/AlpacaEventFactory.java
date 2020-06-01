package com.algotrade.alpaca.event;

import java.util.concurrent.ConcurrentHashMap;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.algotrade.alpaca.data.rest.client.TradingService;

import io.github.mainstringargs.alpaca.websocket.listener.AlpacaStreamListenerAdapter;
import io.github.mainstringargs.alpaca.websocket.message.AlpacaStreamMessageType;
import io.github.mainstringargs.domain.alpaca.order.Order;
import io.github.mainstringargs.domain.alpaca.websocket.AlpacaStreamMessage;
import io.github.mainstringargs.domain.alpaca.websocket.trade.TradeUpdateMessage;

@Component
public class AlpacaEventFactory {
	
	private static Logger logger = LoggerFactory.getLogger(AlpacaEventFactory.class);

	@Autowired
	private TradingService tradingService;
	
    @Autowired
    private ApplicationEventPublisher applicationEventPublisher;
    
	@Autowired 
	private ConcurrentHashMap<String, String> pendingOrderRegistry;
	
//	@Autowired
//	private AlpacaWebSocketService alpacaWebSocketService;
	
	
    @PostConstruct
	public void listenAndPropagateAlpacaEvent(){
    	tradingService.regsiterListener(new AlpacaStreamListenerAdapter(
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

			Order order = tradingService.getOrder(orderId);
			if( order.getStatus().equalsIgnoreCase("filled") || 
					order.getStatus().equalsIgnoreCase("cancelled") ||
					order.getStatus().equalsIgnoreCase("expired")){
				logger.info("Order for the ticker="+order.getSymbol()+" is "+order.getStatus());
				pendingOrderRegistry.remove(orderId);
				AlpaceTradeUpdateEvent event = new AlpaceTradeUpdateEvent(order);
				applicationEventPublisher.publishEvent(event);
			}

    	 }

    }
}
