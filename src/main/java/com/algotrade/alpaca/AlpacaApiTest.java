package com.algotrade.alpaca;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Map;

import org.ta4j.core.BarSeries;
import org.ta4j.core.Rule;
import org.ta4j.core.indicators.AroonOscillatorIndicator;
import org.ta4j.core.indicators.RSIIndicator;
import org.ta4j.core.indicators.SMAIndicator;
import org.ta4j.core.indicators.helpers.ClosePriceIndicator;
import org.ta4j.core.indicators.statistics.StandardDeviationIndicator;
import org.ta4j.core.num.Num;
import org.ta4j.core.trading.rules.CrossedUpIndicatorRule;

import com.algotrade.alpaca.data.ta4j.AlpacaTa4jAdapter;

import ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy;
import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.enums.BarsTimeFrame;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.bar.Bar;

public class AlpacaApiTest {

	public static void main(String[] args) {
		// Get bars
		try {
			ZonedDateTime start = ZonedDateTime.of(2020, 04, 01, 0, 0, 0, 0, ZoneId.of("America/New_York"));
			ZonedDateTime end = ZonedDateTime.of(2020, 04, 03, 23, 59, 0, 0, ZoneId.of("America/New_York"));

			String keyId = System.getProperty("alpca.api.keyId");
			String secret = System.getProperty("alpca.api.secret");
			System.setProperty("javax.net.ssl.trustStore",
					"/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/jre/lib/security/cacerts");
			System.setProperty("javax.net.ssl.trustStorePassword", "changeit");
			
			AlpacaAPI alpacaAPI = new AlpacaAPI("V2", keyId, secret, "https://paper-api.alpaca.markets",
					"https://data.alpaca.markets");

			Map<String, ArrayList<Bar>> bars = alpacaAPI.getBars(BarsTimeFrame.FIFTEEN_MINUTE, "AAPL", null, start, end, null,
					null);
			ArrayList<Bar> barsL =  bars.get("AAPL");
			BarSeries barSeries = AlpacaTa4jAdapter.generateBars(barsL);
			
			testWithIndicator(barSeries);
	//		RSIIndicator  indicator = new RSIIndicator (barSeries, barsL.size());
			System.out.println("\n\nBars response:");
			for (Bar bar : bars.get("AAPL")) {
				System.out.println("\t==========");
				System.out.println(
						"\tUnix Time " + ZonedDateTime.ofInstant(Instant.ofEpochSecond(bar.getT()), ZoneOffset.UTC));
				System.out.println("\tOpen: $" + bar.getO());
				System.out.println("\tHigh: $" + bar.getH());
				System.out.println("\tLow: $" + bar.getL());
				System.out.println("\tClose: $" + bar.getC());
				System.out.println("\tVolume: " + bar.getV());
			}
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
	}
	
	private static void testWithIndicator(BarSeries series){
		Num firstClosePrice = series.getBar(0).getClosePrice();
        System.out.println("First close price: " + firstClosePrice.doubleValue());
        // Or within an indicator:
        ClosePriceIndicator closePrice = new ClosePriceIndicator(series);
        // Here is the same close price:
        System.out.println(firstClosePrice.isEqual(closePrice.getValue(0))); // equal to firstClosePrice

        // Getting the simple moving average (SMA) of the close price over the last 5
        // bars
        StandardDeviationIndicator standardDeviationIndicator = new  StandardDeviationIndicator(closePrice, 10);
        System.out.println("SD " +standardDeviationIndicator.getValue(series.getEndIndex()));
        SMAIndicator shortSma = new SMAIndicator(closePrice, 5);
        // Here is the 5-bars-SMA value at the 42nd index
      //  System.out.println("5-bars-SMA value at the 42nd index: " + shortSma.getValue(42).doubleValue());

        // Getting a longer SMA (e.g. over the 30 last bars)
        SMAIndicator longSma = new SMAIndicator(closePrice, 30);
        Rule buyingRule = new CrossedUpIndicatorRule(shortSma, longSma);
        Boolean result = buyingRule.isSatisfied(series.getEndIndex());
        System.out.println(result);
	}
}
