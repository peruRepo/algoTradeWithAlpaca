package com.algotrade.alpaca.logger;

import org.slf4j.Logger;

public class LoggerFactory {
	
	private static final Logger LOGGER = org.slf4j.LoggerFactory.getLogger("DynamicStrategy");

	public static Logger getLogger() {
		return LOGGER;
	}
}

