package com.algotrade.alpaca.backtest;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.StaticApplicationContext;
import org.ta4j.core.BarSeries;
import org.ta4j.core.BaseBarSeries;
import org.ta4j.core.Rule;
import org.ta4j.core.TradingRecord;

import com.algotrade.alpaca.strategy.TradingStrategyExecutionServiceImpl;
import com.algotrade.alpaca.strategy.exception.TradeStrategyExecutionException;
import com.algotrade.alpaca.strategy.pojo.StockWatch;

/*
 * This class serves like a adapter for ta4j based Strategy
 */
public class DynamicTradingRule implements Rule{
	
	private static final Logger logger = LoggerFactory.getLogger(DynamicTradingRule.class);
	
	private static ScriptEngineManager factory;
	private static ScriptEngine engine;
	private static String scriptTemplete = " var obj = new Object();\n" + " var ta4jCorePackage = new JavaImporter( "
			+ getTa4jPackagesList() + ");\n" + " with(ta4jCorePackage) {\n" + "   obj.tradingRule = ";
	private final static String endBracket = "}";
	
	{
		 factory = new ScriptEngineManager();
		 engine = factory.getEngineByName("JavaScript");
	}
	
	public DynamicTradingRule(BarSeries barSeries, StockWatch stockWatch, String dynamicJSbasedRule) {
		super();
		this.barSeries = barSeries;
		this.stockWatch = stockWatch;
		this.dynamicJSbasedRule = dynamicJSbasedRule;
	}


	private BarSeries barSeries;
	private StockWatch stockWatch;
	private String dynamicJSbasedRule;
	
	
	@Override
	public boolean isSatisfied(int index, TradingRecord tradingRecord) {
		return executeTradingRule(this.dynamicJSbasedRule, barSeries, index, stockWatch);

	}
	
	

	
	
	private static String getTa4jPackagesList()  {
		
		try {
			URI uri = DynamicTradingRule.class.getResource("/meta/StrategyPackagesList.txt").toURI();
			//URI uri = new URI("file:///Users/sriram/Documents/Study/Projects/Algo/AlgoTradeWithAlpaca/src/main/resources/meta/StrategyPackagesList.txt");
			List<String> lines  = Files.readAllLines(Paths.get(uri));
			StringBuilder packagesNames = new StringBuilder();
			for (String line : lines) {
				packagesNames.append(line);
				packagesNames.append(",");
			}
			if (packagesNames.length() > 0) {
				packagesNames.deleteCharAt(packagesNames.length() - 1);
			}
			return packagesNames.toString();
		} catch (IOException | URISyntaxException e) {
			logger.error("Exception happend while trying to read package meta data ",e);
			return "";
		}

	}
	

	
	private Boolean executeTradingRule(String tradingRule, BarSeries barSeries, Integer index, StockWatch stockWatch) {
		String jsScript = scriptTemplete + tradingRule + endBracket;
		try {
			engine.eval(jsScript);
			Object obj = engine.get("obj");
			// create an Invocable object by casting the script engine object
			Invocable inv = (Invocable) engine;
			Boolean executeTrade = (Boolean) inv.invokeMethod(obj, "tradingRule", barSeries, index, stockWatch);
			return executeTrade;
		} catch (ScriptException | NoSuchMethodException e) {

			logger.error("Exception happened while executing strategy script =" +jsScript + "  and exception is=", e);
			throw new TradeStrategyExecutionException(e.getMessage());
		}

	}
}
