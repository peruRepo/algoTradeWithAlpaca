package com.algotrade.alpaca.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.algotrade.alpaca.service.TradingCircuitBreakerI;
import com.algotrade.alpaca.strategy.TradingStrategyServiceI;
import com.algotrade.alpaca.strategy.pojo.StockTradeStrategy;

@RestController
@CrossOrigin
public class TradeStrategyController {

	@Autowired
	private TradingStrategyServiceI tradingStrategyService;
	
	@Autowired
	private TradingCircuitBreakerI tradingCircuitBreakerI;
	
	@PostMapping("/alpaca/strategy/updateStrategy")
	@ResponseBody
	public StockTradeStrategy updateStrategy(@RequestBody StockTradeStrategy stockTradeStrategy){
		tradingStrategyService.storeStockTradeStrategy(stockTradeStrategy);
		return stockTradeStrategy;
	}
	
	@GetMapping("/alpaca/strategy/getStrategy")
	@ResponseBody
	public StockTradeStrategy getStrategy(@RequestParam("ticker")String ticker){
		return tradingStrategyService.getTradingStrategy(ticker);		
	}
	
	@GetMapping("/alpaca/strategy/getAllStrategy")
	@ResponseBody
	public List<StockTradeStrategy> getAllStrategy(){
		return tradingStrategyService.getAllTradingStrategies();
	}
	
	@DeleteMapping("/alpaca/strategy/removeStrategy")
	public void removeStrategy(@RequestParam("ticker")String ticker){
		tradingStrategyService.removeTradingStrategy(ticker);		
	}
	
	@GetMapping("/alpaca/strategy/stop")
	@ResponseBody
	public String stopAllTrade(){
		tradingCircuitBreakerI.stopAllTradeActivities();	
		return "trading is Halted";
	}
	
}
