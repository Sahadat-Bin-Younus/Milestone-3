// 13-11 Module Summary and Practice Task:

/* practice problem-3: 

Your task is to divide the given number by 5 and show the reminder as the output.

input:
the first line of the input contains the number.

output:
print the reminder.

*/

//one line way
 var num= 124;
  console.log(num % 5);

//2nd way
  var num= 124;
   var numResult= 124%5;
    console.log(numResult);

// 3rd way
var num = 124;
var divisor = 5;
var remainder = num % divisor;
console.log(remainder);


//more advance way   
var num = 124;
var quotient = Math.floor(num / 5);
 /* Math.floor() is used when you want to extract the whole number part of the division—ignoring any decimal values. In other words, it gives you the integer quotient. here quotient var output is : 24
 */ 
var remainder = num % 5;

console.log("Quotient:", quotient);
console.log("Remainder:", remainder);