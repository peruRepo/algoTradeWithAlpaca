package com.algotrade.alpaca.configuration;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class StockTradeStrategyDeserializer extends JsonDeserializer {

	@Override
	public Object deserialize(JsonParser arg0, DeserializationContext arg1)
			throws IOException, JsonProcessingException {
		
		return null;
	}

}
