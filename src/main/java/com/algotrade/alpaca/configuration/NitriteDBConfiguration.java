package com.algotrade.alpaca.configuration;

import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;

@Configuration
public class NitriteDBConfiguration {

	
	@Bean("nitriteDB")
	public Nitrite init_nitriteDB(){
		String fileLocation = System.getProperty("db.location");
		Nitrite db = Nitrite.builder()
		        .filePath(fileLocation+"AlpacaTrade.db")
		        .openOrCreate();
		return db;
	}
	
	@Bean
	public ObjectRepository<StockTradeStrategy> stockStrategyRepo(Nitrite nitriteDB){
		return nitriteDB.getRepository(StockTradeStrategy.class);
	}
	
	
}
