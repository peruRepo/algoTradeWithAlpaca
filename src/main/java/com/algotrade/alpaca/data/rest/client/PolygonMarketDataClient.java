package com.algotrade.alpaca.data.rest.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.algotrade.alpaca.data.polygon.pojo.AggregatesResponse;
import com.algotrade.alpaca.data.polygon.pojo.RecentTradeData;

import io.github.mainstringargs.polygon.PolygonConstants;
import io.github.mainstringargs.polygon.enums.Market;
import io.github.mainstringargs.polygon.enums.StockType;
import io.github.mainstringargs.polygon.enums.TickerSort;
import io.github.mainstringargs.polygon.rest.PolygonRequestBuilder;

@Component
public class PolygonMarketDataClient  implements MarketDataClient {
	
	private Logger logger = LoggerFactory.getLogger(PolygonMarketDataClient.class);

	private RestTemplate restTemplate = new RestTemplate();
	
	@Value("${polygon.host}")
	private String polygonHost;
	
	private String apiKeyId = System.getenv("alpca_live_api_keyId");
	
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
	
	public String stockSearch(String searchString) {

		try {
			String url = buildPolygonRequest(TickerSort.TICKER_ASCENDING, 
					null,
					Market.STOCKS,
					"us", 
					searchString, 
					20,
					1,
					true).getURL();
			ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
			return responseEntity.getBody();
		} catch(Exception ex){
			logger.error("Exception happened while trying to get the ticker suggestion ",ex);
			throw ex;
		}

	}
	
	private PolygonRequestBuilder buildPolygonRequest(TickerSort tickerSort, StockType stockType, Market market, String locale,
            String search, Integer perpage, Integer page, Boolean active){
	    PolygonRequestBuilder builder = new PolygonRequestBuilder(polygonHost, PolygonConstants.VERSION_2_ENDPOINT,
                PolygonConstants.REFERENCE_ENDPOINT,
                PolygonConstants.TICKERS_ENDPOINT);

        if (tickerSort != null) {
            builder.appendURLParameter(PolygonConstants.SORT_PARAMETER, tickerSort.getAPIName());
        }

        if (stockType != null) {
            builder.appendURLParameter(PolygonConstants.TYPE_PARAMETER, stockType.getAPIName());
        }

        if (market != null) {
            builder.appendURLParameter(PolygonConstants.MARKET_PARAMETER, market.getAPIName());
        }

        if (locale != null) {
            builder.appendURLParameter(PolygonConstants.LOCALE_PARAMETER, locale);
        }

        if (search != null) {
            builder.appendURLParameter(PolygonConstants.SEARCH_PARAMETER, search);
        }

        if (perpage != null) {
            builder.appendURLParameter(PolygonConstants.PERPAGE_PARAMETER, String.valueOf(perpage));
        }

        if (page != null) {
            builder.appendURLParameter(PolygonConstants.PAGE_PARAMETER, String.valueOf(page));
        }

        if (active != null) {
            builder.appendURLParameter(PolygonConstants.ACTIVE_PARAMETER, String.valueOf(active));
        }
        builder.appendURLParameter("apiKey",apiKeyId);
        return builder;
	}
	
}
