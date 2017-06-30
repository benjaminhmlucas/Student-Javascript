var us_dollar = prompt("Enter amount of U.S. dollars to convert:",);
var european_euro = 0.925072;
var british_pound = 0.803464;
var swiss_franc = 0.992741;
var argentine_peso = 15.585348;
var botswana_pula = 10.317157;
function calc_exchange(exchangeUs, exchangeForeign)
{
	var exchangeOut = exchangeUs * exchangeForeign;
	return exchangeOut.toFixed(2);
	
}