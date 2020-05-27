package com.algotrade.alpaca.data.rest.client;

public interface TradingServiceProvider<A,W> {

	public A getTradingAPI() throws TradingServiceProviderException;
	public W getWebSocketClientAPI() throws TradingServiceProviderException;
	public void setCredentials(String key, String secret);
	
}
