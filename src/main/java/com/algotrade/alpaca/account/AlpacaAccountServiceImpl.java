package com.algotrade.alpaca.account;

 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.algotrade.alpaca.data.rest.client.TradingService;

import io.github.mainstringargs.domain.alpaca.account.Account;

public class AlpacaAccountServiceImpl implements AlpacaAccountServiceI {
	
	@Autowired
	private TradingService tradingService;
	
	public Account getAccount(){

		return tradingService.getAccount();

	}
	
}
