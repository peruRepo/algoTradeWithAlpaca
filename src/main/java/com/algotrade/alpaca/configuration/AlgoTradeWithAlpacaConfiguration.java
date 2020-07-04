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
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@Configuration
@EnableScheduling
public class AlgoTradeWithAlpacaConfiguration {
	
	
	@Bean
	public ObjectMapper objectMapper(){
		ObjectMapper mapper = new ObjectMapper();
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
		mapper.setDateFormat(df);
		mapper.registerModule(new JavaTimeModule());
		return mapper;
	}

	
	@Bean
	public RestTemplate RestTemplate() {
		return new RestTemplate();
	}

	
	@Bean
	public ConcurrentHashMap<String, String> pendingOrderRegistry() {
		return new ConcurrentHashMap<String, String>();
	}
}
