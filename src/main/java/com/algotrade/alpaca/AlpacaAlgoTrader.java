package com.algotrade.alpaca;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Hello world!
 *
 */
@SpringBootApplication
public class AlpacaAlgoTrader {
	public static void main(String[] args) {
		System.setProperty("javax.net.ssl.trustStore",
				"/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/jre/lib/security/cacerts");
		System.setProperty("javax.net.ssl.trustStorePassword", "changeit");
		SpringApplication.run(AlpacaAlgoTrader.class, args);
	}
}
