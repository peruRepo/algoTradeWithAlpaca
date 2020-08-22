#!/bin/sh
# Set the profile either as "paper" or "live"
export app_profile="paper"
#
export alpaca_api_baseDataUrl="https://data.alpaca.markets"

# Mostly you don't need to change the url for paper
export alpaca_paper_api_baseURL="https://paper-api.alpaca.markets"
# Enter your paper api Key here
export alpaca_paper_api_keyId="Provide your api key here"
# Enter your paper api Secret here
export alpaca_paper_api_secret="Provide your api secret key here"
# Enter your live api key here
export alpaca_live_api_keyId="blah"
# Enter your live api secret here
export alpaca_live_api_secret="blah"
# Mostly you don't need to change the url for live
export alpaca_live_api_baseURL="https://api.alpaca.markets"

java_spring_profile_opt="-Dspring.profiles.active="
app_port_opt=" -Dserver.port="

#Provide the port for your app , Keep it seperate for paper and live
app_port="8080"

#Provide your jre certificate path
certificate_path=

# Provide Location to store the Db files
export db_location="/Users/sriram/Documents/Study/Projects/Algo/AlgoTradeWithAlpaca/db/"
JAVA_OPT=${java_spring_profile_opt}${app_profile}${app_port_opt}${app_port}
#echo $JAVA_OPT
java $JAVA_OPT -jar ../target/AlgoTradeWithAlpaca-0.0.1-SNAPSHOT.jar

