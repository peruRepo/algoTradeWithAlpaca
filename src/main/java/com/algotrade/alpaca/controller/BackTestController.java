package com.algotrade.alpaca.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.algotrade.alpaca.backtest.pojo.BackTestRequest;
import com.algotrade.alpaca.backtest.pojo.BackTestResponse;
import com.algotrade.alpaca.backtest.pojo.BackTestStrategy;
import com.algotrade.alpaca.backtest.repository.NitrateBackTestStrategyRepo;
import com.algotrade.alpaca.backtest.service.BackTestExecutorService;

@RestController
@CrossOrigin
public class BackTestController {

	@Autowired
	private BackTestExecutorService backTestExecutorService;
	
	@Autowired
	private NitrateBackTestStrategyRepo nitrateBackTestStrategyRepo;
	
	@PostMapping("alpaca/backtest/execute")
	public BackTestResponse executeBackTest(@RequestBody BackTestRequest backTestRequest) {
		return backTestExecutorService.executeStrategy(backTestRequest);		
	}
	
	@PostMapping("alpaca/backtest/store")
	public String storeBackTest(@RequestBody BackTestStrategy backTestStrategy) {
		backTestExecutorService.storeStrategy(backTestStrategy);
		return "success";
	}
	
	@GetMapping("alpaca/backtest/getBackTest")
	public BackTestStrategy getBackTest(@RequestParam("strategyName") String strategyName) {
		return nitrateBackTestStrategyRepo.getBackTestStrategy(strategyName);
	}
	
	@GetMapping("alpaca/backtest/getAllBackTest")
	public List<BackTestStrategy> getAllBackTestStrategies() {
		return nitrateBackTestStrategyRepo.getAllBackTestStrategies().collect(Collectors.toList());	
	}
	
	@DeleteMapping("alpaca/backtest/remove")
	public String deleteBackTest(@RequestParam("strategyName") String strategyName) {
		nitrateBackTestStrategyRepo.removeStrategy(strategyName);
		return "sucess";	
	}
	
}
