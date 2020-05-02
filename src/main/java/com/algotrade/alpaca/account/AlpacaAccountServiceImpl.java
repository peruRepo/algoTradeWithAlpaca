package com.algotrade.alpaca.account;

 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.algotrade.alpaca.strategy.exception.AlpacaAPIException;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.account.Account;

public class AlpacaAccountServiceImpl implements AlpacaAccountServiceI {
	
	private Logger logger = LoggerFactory.getLogger(AlpacaAccountServiceImpl.class);
	
	@Autowired
	private AlpacaAPI alpacaAPI;
	
	public Account getAccount(){
		
		try {
			return alpacaAPI.getAccount();
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happened while trying to get the Account",e);
			throw new AlpacaAPIException(e.getMessage());
		}
	}
	
}
