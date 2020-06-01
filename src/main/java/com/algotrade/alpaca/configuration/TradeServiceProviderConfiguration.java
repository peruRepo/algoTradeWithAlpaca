package com.algotrade.alpaca.configuration;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.concurrent.ConcurrentHashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@Configuration
public class TradeServiceProviderConfiguration {
	
	private Logger logger = LoggerFactory.getLogger(TradeServiceProviderConfiguration.class);
	
	private String apiVersion;
	
	private String keyId;
	
	private String secret;
	
	private String baseURL;
	
	private String baseDataUrl;
	
	
	@Bean
	public ObjectMapper objectMapper(){
		ObjectMapper mapper = new ObjectMapper();
//		SimpleModule module = new SimpleModule();
	//	module.addDeserializer(StockTradeStrategy.class, new StockTradeStrategyDeserializer());
	//	mapper.registerModule(module);	
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
		mapper.setDateFormat(df);
		mapper.registerModule(new JavaTimeModule());
		return mapper;
	}


	
//	  @Bean public PolygonAPI polygonAPI(){ 
//			keyId =  System.getProperty("alpca.live.api.keyId"); 
//			return new PolygonAPI(keyId);
//	  
//	  }
	 
	
	
	@Bean
	public ConcurrentHashMap<String, String> pendingOrderRegistry() {
		return new ConcurrentHashMap<String, String>();
	}
}
