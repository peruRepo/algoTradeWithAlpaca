package com.algotrade.alpaca.backtest.repository;

import static org.dizitart.no2.objects.filters.ObjectFilters.eq;

import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import org.dizitart.no2.WriteResult;
import org.dizitart.no2.exceptions.NotIdentifiableException;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.algotrade.alpaca.backtest.pojo.BackTestStrategy;

@Component
public class NitrateBackTestStrategyRepo implements BackTestStrategyRepo {

	@Autowired
	private ObjectRepository<BackTestStrategy> backTestStrategyRepo;
	
	@Override
	public void saveBackTestStrategy(BackTestStrategy backTestStrategy) {
		try{
			WriteResult result =backTestStrategyRepo.update(eq("strategyName", backTestStrategy.getStrategyName()),backTestStrategy);
			if(result.getAffectedCount() == 0 ){
				backTestStrategyRepo.insert(backTestStrategy);	
			}
		} catch(NotIdentifiableException ex){
			backTestStrategyRepo.insert(backTestStrategy);		
		}
		
	}

	@Override
	public BackTestStrategy getBackTestStrategy(String name) {
		 return backTestStrategyRepo.find(eq("strategyName", name)).firstOrDefault();
	}

	@Override
	public void removeStrategy(String name) {

		backTestStrategyRepo.remove(eq("strategyName", name));
		
	}

	@Override
	public Stream<BackTestStrategy> getAllBackTestStrategies() {

		return StreamSupport.stream(backTestStrategyRepo.find().spliterator(), true);

	}




}
