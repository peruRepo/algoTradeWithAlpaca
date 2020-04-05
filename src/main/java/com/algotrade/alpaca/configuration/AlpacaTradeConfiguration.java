package com.algotrade.alpaca.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.account.Account;
import springfox.documentation.swagger.web.SwaggerApiListingReader;

@Configuration
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
}
