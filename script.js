var mealCost = Number(prompt("Cost of meal (ex. 24.98)"));
var tipPctg = Number(prompt("Tip percentage as decimal (ex. 0.18 for 18%)"));
var tipAmount = mealCost * tipPctg;
var totalBill = mealCost + tipAmount;
var numOfPeople = Number(prompt("Number of people in party (minimum 1)"));
console.log(`Gross meal cost is $${mealCost}, which is $${totalBill.toFixed(2)} after tip. Your share is $${(totalBill / numOfPeople).toFixed(2)}. Hope it was delicious!`)