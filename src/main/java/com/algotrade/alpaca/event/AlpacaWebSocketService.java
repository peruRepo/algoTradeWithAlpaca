package com.algotrade.alpaca.event;

import java.util.LinkedList;
import java.util.List;

import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import io.github.mainstringargs.alpaca.websocket.client.AlpacaWebsocketClient;
import io.github.mainstringargs.alpaca.websocket.listener.AlpacaStreamListener;

//@Component
public class AlpacaWebSocketService {

	private AlpacaWebsocketClient alpacaWebsocketClient;

	@Value("${alpaca.api.baseURL}")
	private String baseURL;

	@Value("${alpaca.api.version}")
	private String apiVersion;
	
	private String keyId = System.getenv("alpca.paperapi.keyId");
	private String secret = System.getenv("alpca.paper.api.secret");
	
    private List<AlpacaStreamListener> listeners = new LinkedList<AlpacaStreamListener>();

	@Scheduled(initialDelay=2000, fixedDelay = 1200000)
	public void refreshWebSocketConnection() {
		if(alpacaWebsocketClient != null &&  alpacaWebsocketClient.isConnected()){
			alpacaWebsocketClient.disconnect();
		}
		this.alpacaWebsocketClient = new AlpacaWebsocketClient(keyId, secret, baseURL);
		this.alpacaWebsocketClient.connect();
		for(AlpacaStreamListener listener : listeners){
			this.alpacaWebsocketClient.addListener(listener);
		}
	}
	
	 public void addListener(AlpacaStreamListener streamListener) {
		 listeners.add(streamListener);
	 }
	

}
