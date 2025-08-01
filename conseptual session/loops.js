// for, while, do-while loops,for in loop, for of loop with example and output of each:
// **********************************************
// 1. For Loop:
//  var count = 5;
//   for (let i = 1; i  <= count; i++) {
//     console.log("Count:", i); // Output: Count: 1, Count: 2, ..., Count: 5
//   }


/* ***********************************************
********basic for loop:

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i); // Output: Iteration: 0, Iteration: 1, ..., Iteration: 4
}

********************basic for of loop:

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit); // Output: Fruit: apple, Fruit: banana, Fruit: cherry
}
*********************  basic for in loop:
let person = { name: "Alice", age: 30, city: "New York" }; 
for (let key in person) {
    console.log(key + ": " + person[key]); // Output: name: Alice, age: 30, city: New York
}


 ********** basic While Loop:
let count = 0;
while (count < 5) {
    console.log("Count:", count); // Output: Count: 0, Count: 1, ..., Count: 4
    count++;
}
****************do While Loop:
let count = 0; 
do {
    console.log("Count:", count); // Output: Count: 0, Count: 1, ..., Count: 4
    count++;
} while (count < 5);

*********************break statements:
let count = 0;
while (count < 10) {
    if (count === 5) {
        break; // Exit the loop when count is 5
    }
    console.log("Count:", count); // Output: Count: 0, Count: 1, ..., Count: 4
    count++;    
************************continue statements:
let count = 0;
while (count < 10) {
    count++;
    if (count === 5) {
        continue; // Skip the iteration when count is 5
    }
    console.log("Count:", count); // Output: Count: 1, Count: 2, ..., Count: 4, Count: 6, ..., Count: 10
    



*/



var num = 9;
for (var i= 1; i<= 10; i++){
    console.log(num + " * " + i + " = " + (num * i)); // Output: 9 * 1 = 9, 9 * 2 = 18, ..., 9 * 10 = 90
}



/* *********************************************** 4
for in loop:
The `for...in` loop is used to iterate over the properties of an object. It allows you to access each property name (key) in the object.    
Example:
let person = { name: "Alice", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]); // Output: name: Alice, age: 30, city: New York
}
    
*/

/* 3. Increment and Decrement Operators:
Increment (`++`) and decrement (`--`) operators are used to increase or decrease the value of a variable by 1, respectively. These operators are often used in loops or when you need to keep track of a count or index. 

Example:
let count = 0;
count++; // Increment count by 1 (equivalent to count = count + 1)
count--;    // Decrement count by 1 (equivalent to count = count - 1)
console.log("Count after increment:", count); // Output: Count after increment: 1
console.log("Count after decrement:", count); // Output: Count after decrement: 0   

*/
