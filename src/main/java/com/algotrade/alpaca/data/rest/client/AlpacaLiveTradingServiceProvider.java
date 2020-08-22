package com.algotrade.alpaca.data.rest.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.alpaca.websocket.client.AlpacaWebsocketClient;
import io.github.mainstringargs.domain.alpaca.account.Account;

@Profile("live")
@Component
public class AlpacaLiveTradingServiceProvider implements TradingServiceProvider<AlpacaAPI, AlpacaWebsocketClient>{
	
	private static final Logger logger = LoggerFactory.getLogger(AlpacaLiveTradingServiceProvider.class);
	
	private String baseURL;
	
	private String baseDataUrl;
	
	@Value("${alpaca.api.version}")
	private String apiVersion;
	
	private String keyId;
	
	private String secret;
	
	@Override
	public AlpacaAPI getTradingAPI() throws TradingServiceProviderException {

		keyId = System.getenv("alpaca_live_api_keyId");
		secret = System.getenv("alpaca_live_api_secret");
		baseURL = System.getenv("alpaca_live_api_baseURL");
		baseDataUrl = System.getenv("alpaca_api_baseDataUrl");
		if(StringUtils.isEmpty(keyId) || StringUtils.isEmpty(secret)) {
			throw new TradingServiceProviderException("Alpaca Paper trading api connection is not established!");
		}
		AlpacaAPI alpacaAPI =  new AlpacaAPI(apiVersion, keyId, secret, baseURL, baseDataUrl);
		try {
			Account alpacaAccount = alpacaAPI.getAccount();
		} catch (AlpacaAPIRequestException e) {
			logger.error("Error happened while trying setup the bean AlpacaAPI",e);
			throw new TradingServiceProviderException("Alpaca Paper trading api connection is not established!");
		}
		
		return alpacaAPI;
	}

	@Override
	public void setCredentials(String key, String secret) {
		this.keyId = key;
		this.secret = secret;
		
	}

	@Override
	public AlpacaWebsocketClient getWebSocketClientAPI() throws TradingServiceProviderException {
		AlpacaWebsocketClient alpacaWebsocketClient = new AlpacaWebsocketClient(keyId, secret, baseURL);
		alpacaWebsocketClient.connect();
		return alpacaWebsocketClient;
	}
	
	

}
