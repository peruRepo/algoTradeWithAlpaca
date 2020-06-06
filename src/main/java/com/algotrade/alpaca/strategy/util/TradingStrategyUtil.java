package com.algotrade.alpaca.strategy.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.algotrade.alpaca.strategy.TradingStrategyExecutionServiceImpl;

public class TradingStrategyUtil {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(TradingStrategyUtil.class);
	
	private static String scriptTemplete = " var obj = new Object();\n" + " var ta4jCorePackage = new JavaImporter( "
			+ getTa4jPackagesList() + ");\n" + " with(ta4jCorePackage) {\n" + "   obj.tradingRule = ";
	
	
	public static String getTradingScriptTemplateString() {
		return scriptTemplete;
	}
	
	private static String getTa4jPackagesList() {
		BufferedReader reader = null;
		try {
			InputStream in = TradingStrategyExecutionServiceImpl.class.getResourceAsStream("/meta/StrategyPackagesList.txt");
			reader = new BufferedReader(new InputStreamReader(in));
			
			StringBuilder packagesNames = new StringBuilder();
		    String line;
		     
		    while ((line = reader.readLine()) != null) {
		    	packagesNames.append(line);
		    	packagesNames.append(",");
		    }
			if (packagesNames.length() > 0) {
				packagesNames.deleteCharAt(packagesNames.length() - 1);
			}
			reader.close();
		    return packagesNames.toString();
		    
		} catch (IOException e) {
			LOGGER.error("Exception happend while trying to read package meta data ", e);
			return "";
		}
	}
}
