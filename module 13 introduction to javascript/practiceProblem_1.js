
/**13-11 Module Summary and Practice Task
/*  * practice problem-1:
 
 you went to the supermarket to buy somme oranges and apples. calculate how much money the shopkeeper will return.
 
 input: the first line of the input is the taka you have. the second line is the cost of 1kg of oranges and 1kg of apples.

 output: print the result:  */

 //simple way
var money = 1000;
var orangesPrice = 340;
var applesPrice = 340;

var shopkeeperReturn = money - orangesPrice - applesPrice;
console.log(shopkeeperReturn); // Output: 320


// 2nd way
var availableCash = 1000;
var priceOranges = 340;
var priceApples = 340;

var totalCost = priceOranges + priceApples;
var cashReturned = availableCash - totalCost;

console.log(cashReturned); // Output: 320


//  detailed way

var totalMoney = 1000;
var orangeCost = 340;
var appleCost = 340;

var combinedExpense = orangeCost + appleCost;
var changeReturned = totalMoney - combinedExpense;

console.log(`Money we have: ${totalMoney} Taka`);
console.log(`Cost of 1kg oranges: ${orangeCost} Taka`);
console.log(`Cost of 1kg apples: ${appleCost} Taka`);
console.log(`Total expense: ${combinedExpense} Taka`);
console.log(`Money returned by shopkeeper: ${changeReturned} Taka`);

/* Output:
 Money we have: 1000 Taka
Cost of 1kg oranges: 340 Taka
Cost of 1kg apples: 340 Taka
Total expense: 680 Taka
Money returned by shopkeeper: 320 Taka
*/


