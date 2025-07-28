// 13-11 Module Summary and Practice Task:

/* practice problem-3: 
what will be the result of the following codes:

1.const a= isNaN(11);
2.const a= isNaN(2-10);

Explain your answer:
-1. isNaN(11) checks if 11 is not a number → but 11 is a number, so result is false. 
-2. isNaN(2 - 10) evaluates to isNaN(-8) → -8 is still a valid number, so again: false.

//check is it NaN or not
console.log(isNaN(yourVariable)); // true or false

*/

const a= isNaN(11);
const b= isNaN(2-10);

console.log(a);
console.log(b);