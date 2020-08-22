package com.algotrade.alpaca.data.repository;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import org.dizitart.no2.WriteResult;
import org.dizitart.no2.exceptions.NotIdentifiableException;
import org.dizitart.no2.objects.ObjectRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;

@Component("tradeStrategyRepo")
public class NitriteDBRepository implements TradeStrategyRepo {
	
	private static final Logger Logger = LoggerFactory.getLogger(NitriteDBRepository.class);
	
	@Autowired
	private ObjectRepository<StockTradeStrategy> stockStrategyRepo;
	
	@Override
	public void saveStrategy(StockTradeStrategy stockTradeStrategy) {
		if(!StringUtils.isEmpty(stockTradeStrategy.getTicker())) {
			try{
				WriteResult result =stockStrategyRepo.update(eq("ticker", stockTradeStrategy.getTicker()),stockTradeStrategy);
				if(result.getAffectedCount() == 0 ){
					stockStrategyRepo.insert(stockTradeStrategy);	
				}
			} catch(NotIdentifiableException ex){
				stockStrategyRepo.insert(stockTradeStrategy);		
			}
		} else {
			Logger.error("Ticker Symbol Should not be empty!");
		}

		
	}

	@Override
	public StockTradeStrategy getStrategy(String ticker) {
		 return stockStrategyRepo.find(eq("ticker", ticker)).firstOrDefault();


	}

	@Override
	public Stream<StockTradeStrategy> getAllStrategies() {
		// TODO Auto-generated method stub
		return StreamSupport.stream(stockStrategyRepo.find().spliterator(), true);
	}

	@Override
	public void removeStrategy(String ticker) {
		// TODO Auto-generated method stub
		stockStrategyRepo.remove(eq("ticker", ticker));
	}

	
}

