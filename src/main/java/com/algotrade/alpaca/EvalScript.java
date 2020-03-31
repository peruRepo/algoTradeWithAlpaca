package com.algotrade.alpaca;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

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
		        
		        StringBuilder javaScriptString = new StringBuilder();
		        javaScriptString.append("student=");
			        javaScriptString.append(studentJsonString);
		        javaScriptString.append("\n");
		        javaScriptString.append(javaScriptFunctionString);
		        
		       Object object = engine.eval(javaScriptString.toString());
		  
		       System.out.println(object);
		    }
		    
	    
}
