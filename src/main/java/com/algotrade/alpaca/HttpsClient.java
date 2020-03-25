package com.algotrade.alpaca;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

public class HttpsClient {

	public static void main(String[] args) throws IOException {
		new HttpsClient().testIt();
	}

	private void testIt() throws IOException {
    		System.setProperty("javax.net.ssl.trustStore", "/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/jre/lib/security/cacerts"); 
    		System.setProperty("javax.net.ssl.trustStorePassword", "changeit");
		String https_url = "https://api.polygon.io/v2/aggs/ticker/TSLA/range/1/hour/2020-01-01/2020-01-03?apiKey=PKYD7R1ZHFZUSSX6BIAU";
		String https_url1 = "https://www.google.com/";
		URL url = new URL(https_url);
		HttpsURLConnection con = (HttpsURLConnection) url.openConnection();
		Object object = con.getContent();
		System.out.println(object);
	}
}
