package com.algotrade.alpaca.data.rest.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.algotrade.alpaca.data.polygon.pojo.AggregatesResponse;
import com.algotrade.alpaca.data.polygon.pojo.RecentTradeData;

@Component
public class PolygonMarketDataClient  implements MarketDataClient {


	private RestTemplate restTemplate = new RestTemplate();
	
	@Value("${polygon.host}")
	private String polygonHost;
	
	@Value("${alpaca.api.keyId}")
	private String apiKeyId;
	
	@Value("${alpaca.api.histrorical.trade.path}")
	private String historticalTradeURIPath;
	
	@Value("${alpaca.api.recent.trade.path}")
	private String recentTradeURIPath;
	
	
	/*
	 * (non-Javadoc)
	 * /v1/last/stocks/{symbol}
	 * @see com.algotrade.alpaca.service.rest.client.MarketDataClient#getRecentMarketData(java.lang.String)
	 */
	public RecentTradeData getRecentMarketData(String stock) {
		String url =  getPolygonRecentTradeURL(stock);
		ResponseEntity<RecentTradeData> responseEntity = restTemplate.getForEntity(url, RecentTradeData.class);
		return responseEntity.getBody();
	}

	/*
	 *  Format - https://api.polygon.io/v2/aggs/ticker/${AAPL}/range/${1}/${hour}/${2019-01-01}/${2019-02-01}?apiKey=$GivenAlpacaKey
	 * @see com.algotrade.alpaca.service.rest.client.MarketDataClient#getHistoricalMarketData(java.lang.String, java.sql.Date, java.sql.Date)
	 */
	public AggregatesResponse getHistoricalMarketData(String stock, String startDate, String endDate) {
		
		String url = getPolygonResourceURL(stock,startDate,endDate,1,"hour");
		ResponseEntity<AggregatesResponse> responseEntity = restTemplate.getForEntity(url, AggregatesResponse.class);
		return responseEntity.getBody();
	}

	private String getPolygonResourceURL(String ticker, String startDate, String endDate, Integer bucketSize, String aggregatorRange){
		StringBuilder builder  = new StringBuilder(polygonHost);
		builder.append(historticalTradeURIPath);
	//	builder.append("/");
		builder.append(ticker);
		builder.append("/range/");
		builder.append(bucketSize);
		builder.append("/");
		builder.append(aggregatorRange);
		builder.append("/");
		builder.append(startDate);
		builder.append("/");
		builder.append(endDate);
		builder.append("?apiKey=");
		builder.append(apiKeyId);
		return builder.toString();		
	}
	
	private String getPolygonRecentTradeURL(String ticker){
		StringBuilder builder  = new StringBuilder(polygonHost);
		builder.append(recentTradeURIPath);
	//	builder.append("/");
		builder.append(ticker);
		builder.append("?apiKey=");
		builder.append(apiKeyId);
		return builder.toString();		
	}
	
}
