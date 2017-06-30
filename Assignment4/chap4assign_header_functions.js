var hours_worked;
var pay_rate;
var tax_rate;
var net_pay;
function input_output()
{
	hours_worked = prompt("Please enter how many hours you worked this week:","");
	pay_rate = prompt("Please enter your hourly rate($):","");
	tax_rate = prompt("Please enter your tax rate(%):","")
	net_pay = calculate_pay(hours_worked, pay_rate, tax_rate);
	document.write("<h1>Hours Worked: " + hours_worked + "</h1><br>");
	pay_rate = parseFloat(pay_rate);
	document.write("<h1>Hourly Pay Rate: $" + pay_rate.toFixed(2) + "</h1><br>");
	document.write("<h1>Tax Rate: " + tax_rate + "%<h1><br>");
	document.write("Net Pay = $" + net_pay.toFixed(2));
}
function calculate_pay(hoursWorked, payRate, taxRate)
{
	var grossPay = hoursWorked * payRate;
	var netPay = grossPay - (grossPay * (taxRate/100));
	return netPay;
}