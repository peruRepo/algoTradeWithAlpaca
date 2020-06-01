package com.algotrade.alpaca.configuration;

import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.algotrade.alpaca.backtest.pojo.BackTestStrategy;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;

@Configuration
public class NitriteDBConfiguration {

	
	@Bean("nitriteDB")
	@Profile("paper")
	public Nitrite init_nitrite_paper_DB(){
		String fileLocation = System.getenv("db_location");
		Nitrite db = Nitrite.builder()
		        .filePath(fileLocation+"AlpacaTrade.db")
		        .openOrCreate();
		return db;
	}
	
	@Bean("nitriteDB")
	@Profile("live")
	public Nitrite init_nitrite_live_DB(){
		String fileLocation = System.getenv("db_location");
		Nitrite db = Nitrite.builder()
		        .filePath(fileLocation+"Live_AlpacaTrade.db")
		        .openOrCreate();
		return db;
	}
	
	@Bean
	public ObjectRepository<StockTradeStrategy> stockStrategyRepo(Nitrite nitriteDB){
		return nitriteDB.getRepository(StockTradeStrategy.class);
	}
	
	@Bean
	public ObjectRepository<BackTestStrategy> backTestStrategyRepo(Nitrite nitriteDB){
		return nitriteDB.getRepository(BackTestStrategy.class);
	}
	
}
