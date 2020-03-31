package com.algotrade.alpaca.data.rest.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.algotrade.alpaca.data.pojo.TradeOrder;
import com.algotrade.alpaca.data.polygon.pojo.RecentTradeData;
import com.algotrade.alpaca.service.PortfolioServiceI;
import com.algotrade.alpaca.service.TradingServiceI;

@Component
public class AlpcaRestTradingService implements TradingServiceI, PortfolioServiceI {
	
	@Value("${polygon.host}")
	private String polygonHost;
	
	@Value("${alpaca.api.keyId}")
	private String apiKeyId;
	
	private RestTemplate restTemplate = new RestTemplate();

	@Override
	public void buyStock(TradeOrder tradeOrder) {
		String urlPath =  "";
	//	ResponseEntity<RecentTradeData> responseEntity = restTemplate.postForObject(url, request, responseType, uriVariables);
		
	}

	@Override
	public void sellStock(TradeOrder tradeOrder) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void getOrderHistory() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void getPortFolio() {
		// TODO Auto-generated method stub
		
	}
}
