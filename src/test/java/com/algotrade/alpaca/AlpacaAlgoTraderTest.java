package com.algotrade.alpaca;

import java.io.File;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.algotrade.alpaca.data.polygon.pojo.AggregatesResponse;
import com.algotrade.alpaca.data.rest.client.MarketDataClient;


@RunWith(SpringRunner.class)
@SpringBootTest
public class AlpacaAlgoTraderTest {
	
	@Autowired
	private MarketDataClient polygonMarketDataClient;
	

	public void testPolygonData(){

		System.setProperty("javax.net.ssl.trustStore", "/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/jre/lib/security/cacerts"); 
		System.setProperty("javax.net.ssl.trustStorePassword", "changeit");
		AggregatesResponse data = polygonMarketDataClient.getHistoricalMarketData("TSLA", "2020-01-01", "2020-01-03");
		Assert.assertNotNull(data);
	}
}
