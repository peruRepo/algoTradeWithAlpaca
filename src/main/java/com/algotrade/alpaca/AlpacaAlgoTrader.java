package com.algotrade.alpaca;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AlpacaAlgoTrader {
	public static void main(String[] args) {
		String certificatePath = System.getenv("certificate_path");
		System.setProperty("javax.net.ssl.trustStore",certificatePath);
		System.setProperty("javax.net.ssl.trustStorePassword", "changeit");
		SpringApplication.run(AlpacaAlgoTrader.class, args);
	}
}
