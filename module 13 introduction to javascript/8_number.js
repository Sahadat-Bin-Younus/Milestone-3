// 13-8 Know the fundamentals of JS Numbers
/*

//getting 2 var output with one console.log

let she = "Alice";
let ager = 30;
 console.log(she, ager);  // Outputs: Alice 30

 //getting 2 var output with one console.log with details of variable
let name = "Alice";
let age = 30;
 console.log(`Name: ${name}, Age: ${age}`);
   // Outputs: Name: Alice, Age: 30

   console.log(`Next year, Age will be: ${age + 1}`); //you can do math this way

****************** Here’s the breakdown:
- Backticks (`): These define a template literal, which allows string interpolation and multi-line strings.
- ${...}: This is where the magic happens! It’s called interpolation syntax. It evaluates the expression inside the curly braces and injects the result into the string.**************************************************

*/

//getting 2 var output with one console.log

 let she = "Alice";
   let ager = 30;
      console.log(she, ager);  // Outputs: Alice 30

 //getting 2 var output with one console.log with details of variable
   let name = "Alice";
      let age = 30;
       console.log(`Name: ${name}, Age: ${age}`);
         // Outputs: Name: Alice, Age: 30

 console.log(`Next year, Age will be: ${age + 1}`); //you can do math this way

var orangePrice = 20;
var chocolate = 0.5;

// Reassign orangePrice by converting the string "22.5" into an integer using parseInt
orangePrice = parseInt("22.5"); // result: 22

// Reassign chocolate by converting the string "10.5" into a float using parseFloat
chocolate = parseFloat("10.5"); // result: 10.5

console.log(orangePrice);         // → 22
console.log(orangePrice + chocolate); // → 32.5


var first = 0.1;
var second = 0.2;

// Add first and second, store in total
var total = first + second;

console.log(total); // Shows: 0.30000000000000004
console.log(total.toFixed(3)); // Rounds to 3 decimals: 0.300

// Divide by zero gives Infinity
const num = 50 / 0;
console.log(num);  // Shows: Infinity

const num2 = -50 / 0;
 console.log(num2);  // Shows: -Infinity