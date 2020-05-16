package com.algotrade.alpaca.configuration;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.concurrent.ConcurrentHashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.account.Account;
import io.github.mainstringargs.polygon.PolygonAPI;

@Configuration
@EnableScheduling
public class AlpacaTradeConfiguration {
	
	private Logger logger = LoggerFactory.getLogger(AlpacaTradeConfiguration.class);
	
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
		mapper.registerModule(new JavaTimeModule());
		return mapper;
	}

	@Bean
	public AlpacaAPI alpacaAPI() throws AlpacaAPIRequestException {

		keyId = System.getProperty("alpca.api.keyId");
		secret = System.getProperty("alpca.api.secret");
		AlpacaAPI alpacaAPI =  new AlpacaAPI(apiVersion, keyId, secret, baseURL, baseDataUrl);
		try {
			Account alpacaAccount = alpacaAPI.getAccount();
		} catch (AlpacaAPIRequestException e) {
			logger.error("Error happened while trying setup the bean AlpacaAPI",e);
			throw e;
		}
		
		return alpacaAPI;
	}
	
	
	@Bean
	public PolygonAPI polygonAPI(){

		keyId = System.getProperty("alpca.api.keyId");

		return  new PolygonAPI(keyId);

	}
	
	@Bean
	public ConcurrentHashMap<String, String> pendingOrderRegistry() {
		return new ConcurrentHashMap<String, String>();
	}
}
