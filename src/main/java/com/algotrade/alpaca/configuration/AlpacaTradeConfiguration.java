package com.algotrade.alpaca.configuration;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.account.Account;

@Configuration
@EnableScheduling
public class AlpacaTradeConfiguration {
	
	@Value("${alpaca.api.version}")
	private String apiVersion;
	
	private String keyId;
	
	private String secret;
	
	@Value("${alpaca.api.baseURL}")
	private String baseURL;
	
	@Value("${alpaca.api.baseDataUrl}")
	private String baseDataUrl;
	
	
	
	@Bean
	public ObjectMapper objectMapper(){
		ObjectMapper mapper = new ObjectMapper();
//		SimpleModule module = new SimpleModule();
	//	module.addDeserializer(StockTradeStrategy.class, new StockTradeStrategyDeserializer());
	//	mapper.registerModule(module);	
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
		mapper.setDateFormat(df);
		return mapper;
	}

	@Bean
	public AlpacaAPI alpacaAPI(){

		keyId = System.getProperty("alpca.api.keyId");
		secret = System.getProperty("alpca.api.secret");
		AlpacaAPI alpacaAPI =  new AlpacaAPI(apiVersion, keyId, secret, baseURL, baseDataUrl);
		try {
			Account alpacaAccount = alpacaAPI.getAccount();
		} catch (AlpacaAPIRequestException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return alpacaAPI;
	}
	
	@Bean
	public ConcurrentHashMap<String, String> pendingOrderRegistry() {
		return new ConcurrentHashMap<String, String>();
	}
}
