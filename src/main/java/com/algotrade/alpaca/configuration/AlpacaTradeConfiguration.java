package com.algotrade.alpaca.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

@Configuration
public class AlpacaTradeConfiguration {

	@Bean
	public ObjectMapper objectMapper(){
		ObjectMapper mapper = new ObjectMapper();
		SimpleModule module = new SimpleModule();
		module.addDeserializer(StockTradeStrategy.class, new StockTradeStrategyDeserializer());
		mapper.registerModule(module);		
	}

}
