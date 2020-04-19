// Simple Function to buy based on Price point
// Begin
var Buy_Based_on_Price_Point --> function(barSeries, index, stockWatch){
	closePriceIndicator = new ClosePriceIndicator(barSeries);
	if(closePriceIndicator.getValue(index).floatValue() < 500){
		stockWatch.setStopLossPercentage(-10.0);
		return true;
	}
	return false;
};
<--
// End
// Buy Stock When 30 Moving average is greater than current Price
var Buy_Based_on_Moving_Average --> function(barSeries, index, stockWatch){
	closePriceIndicator = new ClosePriceIndicator(barSeries);
	sma30Indicator = SMAIndicator(closePriceIndicator, 30);

	if(closePriceIndicator.getValue(index).floatValue() >
	   sma30Indicator.getValue(index).floatValue()){
		return true;
	}
	return false;
};
<--
var Sell_Based_on_Moving_Average --> function(barSeries, index, stockWatch){
	closePriceIndicator = new ClosePriceIndicator(barSeries);
	sma30Indicator = SMAIndicator(closePriceIndicator, 30);

	if(closePriceIndicator.getValue(index).floatValue() <
	   sma30Indicator.getValue(index).floatValue()){
		return true;
	}
	return false;
};
