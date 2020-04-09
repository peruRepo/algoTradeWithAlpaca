package com.algotrade.alpaca;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Map;

import javax.naming.spi.DirStateFactory.Result;
import javax.script.Bindings;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

import org.ta4j.core.Bar;
import org.ta4j.core.BarSeries;
import org.ta4j.core.indicators.helpers.ClosePriceIndicator;

import com.algotrade.alpaca.data.ta4j.AlpacaTa4jAdapter;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.enums.BarsTimeFrame;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;


public class EvalScript {
	
		    public static void main(String[] args) throws Exception {
		        // create a script engine manager
		        ScriptEngineManager factory = new ScriptEngineManager();
		        // create a JavaScript engine
		        ScriptEngine engine = factory.getEngineByName("JavaScript");

		        // below JS function is executed.
		        /*
		         * student object value will be provided by the program as the JSON String.
				function checkStudentElgibility(student){
				  if(student.age >= 10 && student.currentGrade >= 5){
				    return true;
				  }
				}
				// student object value will be provided by the program as the JSON String
				
				checkStudentElgibility(student);
		        */
		        
		        String studentJsonString = "{\n" + 
		        		"  \"age\" : 10,\n" + 
		        		"  \"currentGrade\" : 5\n" + 
		        		"}";
		        String javaScriptFunctionString = "function checkStudentElgibility(student){\n" + 
		        		"  if(student.age >= 10 && student.currentGrade >= 5){\n" + 
		        		"    return JSON.stringify(student);\n" + 
		        		"  }\n" + 
		        		"}\n" + 
		        		"checkStudentElgibility(student);";
		        String sdScript = " var obj = new Object();\n" + 
		        		" var ta4jCorePackage = new JavaImporter(org.ta4j.core.indicators.helpers);\n" + 
		        		" var closePriceIndicator = null;\n" + 
		        		" with(ta4jCorePackage) {\n" + 
		        		"   obj.closePrice = function(series){    \n" + 
		        		"      closePriceIndicator = new ClosePriceIndicator(series);\n" + 
		        		"      return closePriceIndicator;\n" + 
		        		"   };\n" + 
		        		" }";
		        StringBuilder javaScriptString = new StringBuilder();
		        javaScriptString.append("student=");
			        javaScriptString.append(studentJsonString);
		        javaScriptString.append("\n");
		        javaScriptString.append(javaScriptFunctionString);
		        
		        engine.eval(sdScript);
		        Object obj = engine.get("obj");
		     // create an Invocable object by casting the script engine object
		        Invocable inv = (Invocable) engine;

		        // invoke the method named "hello" on the object defined in the script
		        // with "Script Method!" as the argument
		        BarSeries series = getSeries();
		        Bar bar = series.getBar(series.getEndIndex());
		       float data =  bar.getLowPrice().floatValue();
		        ClosePriceIndicator result  = (ClosePriceIndicator) inv.invokeMethod(obj, "strategy", series);
		        System.out.println(result.getValue(0));
		        
		        String jsString = "    var obj = new Object()\n" + 
		        		"    var ArrayList = Java.type(\"java.util.ArrayList\");\n" +
		        		"    var customSizeArrayList = new ArrayList(16);\n" + 
		        		"    obj.hello = function(name) { \n" + 
		        		"       customSizeArrayList(name);	\n" + 
		        		"       print('Hello, ' + name) \n" + 
		        		"    }";

		    }
		    
		    
		    private static BarSeries getSeries() throws AlpacaAPIRequestException{
		    		ZonedDateTime start = ZonedDateTime.of(2020, 04, 01, 0, 0, 0, 0, ZoneId.of("America/New_York"));
				ZonedDateTime end = ZonedDateTime.of(2020, 04, 03, 23, 59, 0, 0, ZoneId.of("America/New_York"));

				String keyId = System.getProperty("alpca.api.keyId");
				String secret = System.getProperty("alpca.api.secret");
				System.setProperty("javax.net.ssl.trustStore",
						"/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/jre/lib/security/cacerts");
				System.setProperty("javax.net.ssl.trustStorePassword", "changeit");
				
				AlpacaAPI alpacaAPI = new AlpacaAPI("V2", keyId, secret, "https://paper-api.alpaca.markets",
						"https://data.alpaca.markets");

				Map<String, ArrayList<io.github.mainstringargs.domain.alpaca.bar.Bar>> bars = alpacaAPI.getBars(BarsTimeFrame.FIFTEEN_MINUTE, "AAPL", null, start, end, null,
						null);
				ArrayList<io.github.mainstringargs.domain.alpaca.bar.Bar> barsL =  bars.get("AAPL");
				BarSeries barSeries = AlpacaTa4jAdapter.generateBars(barsL);
				return barSeries;
		    }
	    
}
