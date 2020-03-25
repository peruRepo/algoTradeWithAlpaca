package com.algotrade.alpaca.strategy.trade.condition;

import java.io.IOException;

import com.algotrade.alpaca.strategy.trade.condition.pojo.PricePointTriggerCondition;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TradeConditionDeserializer extends JsonDeserializer {
	private ObjectMapper objectMapper;
	
	
	@Override
	public TradeCondition deserialize(JsonParser jp, DeserializationContext arg1)
			throws IOException, JsonProcessingException {
		JsonNode node = jp.getCodec().readTree(jp);
		PricePointTriggerCondition pricePointTriggerCondition = null;
		if(node.get("triggerName").equals("pricePoint")){
			 pricePointTriggerCondition = objectMapper.readValue(jp, PricePointTriggerCondition.class);
		}
		return pricePointTriggerCondition;
	}

}
