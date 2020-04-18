package com.algotrade.alpaca.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
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
public class BackTestController {

	@Autowired
	private BackTestExecutorService backTestExecutorService;
	
	@Autowired
	private NitrateBackTestStrategyRepo nitrateBackTestStrategyRepo;
	
	@PostMapping("execute/backtest")
	public BackTestResponse executeBackTest(@RequestBody BackTestRequest backTestRequest) {
		return backTestExecutorService.executeStrategy(backTestRequest);		
	}
	
	
	@GetMapping("alpaca/get/backtest")
	public BackTestStrategy getBackTest(@RequestParam("name") String strategyName) {
		return nitrateBackTestStrategyRepo.getBackTestStrategy(strategyName);
	}
	
	@GetMapping("alpaca/get/allbacktest")
	public List<BackTestStrategy> getAllBackTestStrategies() {
		return nitrateBackTestStrategyRepo.getAllBackTestStrategies().collect(Collectors.toList());	
	}
	
	@DeleteMapping("alpaca/delete/backtest")
	public String deleteBackTest(@RequestParam("name") String strategyName) {
		nitrateBackTestStrategyRepo.removeStrategy(strategyName);
		return "sucess";	
	}
}
