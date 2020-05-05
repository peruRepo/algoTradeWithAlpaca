package com.algotrade.alpaca.strategy;

import java.util.concurrent.atomic.AtomicBoolean;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.algotrade.alpaca.service.TradingCircuitBreakerI;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.account.Account;
import io.github.mainstringargs.domain.alpaca.accountconfiguration.AccountConfiguration;

@Component
public class TradingCircuitBreaker implements TradingCircuitBreakerI {

	private static final Logger logger = LoggerFactory.getLogger(TradingCircuitBreaker.class);
	
	private AtomicBoolean allowToTrade = new AtomicBoolean(false);

	@Autowired
	private AlpacaAPI alpacaAPI;

	@Override
	public boolean allowedToEnterTrade() {
		return allowToTrade.get();
	}

	@Scheduled(fixedDelay = 60000)
	public void monitorTradeActivities() {
		try {
			Account account = alpacaAPI.getAccount();
			Float cahPower = Float.parseFloat(account.getCash());
			if(cahPower < 500){
				allowToTrade.set(false);
				AccountConfiguration accountConfiguration = new AccountConfiguration();
				accountConfiguration.setSuspendTrade(true);
				alpacaAPI.setAccountConfiguration(accountConfiguration);
			}
		} catch (AlpacaAPIRequestException e) {
			logger.error("Exception happend while trying to get the monitor account and order activities "
					+ " and exception is=", e);
		}
	}

}
