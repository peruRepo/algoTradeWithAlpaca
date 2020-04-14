package com.algotrade.alpaca.data.repository;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import org.dizitart.no2.WriteResult;
import org.dizitart.no2.exceptions.NotIdentifiableException;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;

@Component("tradeStrategyRepo")
public class NitriteDBRepository implements TradeStrategyRepo {

	@Autowired
	private ObjectRepository<StockTradeStrategy> stockStrategyRepo;
	
	@Override
	public void saveStrategy(StockTradeStrategy stockTradeStrategy) {

		try{
			WriteResult result =stockStrategyRepo.update(eq("ticker", stockTradeStrategy.getTicker()),stockTradeStrategy);
			if(result.getAffectedCount() == 0 ){
				stockStrategyRepo.insert(stockTradeStrategy);	
			}
		} catch(NotIdentifiableException ex){
			stockStrategyRepo.insert(stockTradeStrategy);		
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

