// conditional operators are used to perform operations based on certain conditions.

/* 
The basic conditional operators in JavaScript include:
1. Assignment Operators: Used to assign values to variables.
2. Comparison Operators: Used to compare two values and return a boolean result.
3. Logical Operators: Used to perform logical operations on boolean values.
4. Conditional (Ternary) Operator: A shorthand way to write an `if-else` statement.
5. Bitwise Operators: Used to perform operations on the binary representations of numbers.
6. Typeof Operator: Used to determine the type of a variable or expression.
7. Instanceof Operator: Used to check if an object is an instance of a specific class or constructor function.
8. Spread and Rest Operators: Used to expand or collect elements in arrays and objects.
9. Nullish Coalescing Operator: Used to provide a default value when dealing with `null` or `undefined`.
10. Increment and Decrement Operators: Used to increase or decrease the value of a variable by 1.

Example:
let a = 10;
let b = 5;
console.log(a == b); // Output: false (10 is not equal to 5)
console.log(a === b); // Output: false (10 is not strictly equal to 5)
console.log(a != b); // Output: true (10 is not equal to 5)
console.log(a !== b); // Output: true (10 is not strictly equal to 5)
console.log(a > b); // Output: true (10 is greater than 5)
console.log(a < b); // Output: false (10 is not less than 5)
console.log(a >= b); // Output: true (10 is greater than or equal to 5)
console.log(a <= b); // Output: false (10 is not less than or equal to 5)

// **********************************************
if (a > b) {
    console.log("a is greater than b");
}
else if (a < b) {
    console.log("a is less than b");
}
else {
    console.log("a is equal to b");
}

nested if-else statements can be used to check multiple conditions.
Example:
let age = 20;
if (age < 18) {
    console.log("You are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
}
else {
    console.log("You are a senior citizen.");
}
*****************************************************
if else and else if statements with number and string value and all logical operators with example and output of each:

//🔸 Number-based if-else example
let num = 7;

if (num > 10) {
  console.log("Greater than 10");
} else if (num === 7) {
  console.log("Exactly 7");
} else {
  console.log("Something else");
}


//🔸 String-based if-else example

let name = "Alice";

if (name === "Bob") {
  console.log("Hello Bob!");
} else if (name === "Alice") {
  console.log("Hi Alice!");
} else {
  console.log("Who are you?");
}


//🔸 Logical AND (&&) example

let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 🔸 Logical OR (||) example
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can relax");
} else {
  console.log("Work day");
}


//🔸 Logical NOT (!) example

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
} else {
  console.log("Welcome back!");
}


// 🔸 XOR (Only one is true)
let a = true;
let b = false;

if ((a || b) && !(a && b)) {
  console.log("XOR: Only one is true");
} else {
  console.log("XOR: Both or neither are true");
}


// 🔸 NOR (Neither is true)
let c = false;
let d = false;

if (!(c || d)) {
  console.log("NOR: Neither is true");
} else {
  console.log("NOR: At least one is true");
}

// 🔸 NAND (Not both true)
let e = true;
let f = true;

if (!(e && f)) {
  console.log("NAND: Not both are true");
} else {
  console.log("NAND: Both are true");
}













































// **********************************************
// Example of logical operators
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // Output: false (AND operator)
console.log(isTrue || isFalse); // Output: true (OR operator)
console.log(!isTrue); // Output: false (NOT operator)


// **********************************************
// Example of conditional (ternary) operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote); // Output: Can vote: Yes 


// **********************************************
// Example of bitwise operators
let x = 5; // Binary: 0101
let y = 3; // Binary: 0011
console.log(x & y); // Output: 1 (Binary: 0001)
console.log(x | y); // Output: 7 (Binary: 0111)
console.log(x ^ y); // Output: 6 (Binary: 0110)     
console.log(~x); // Output: -6 (Inverts the bits of 5)
console.log(x << 1);    // Output: 10 (Shifts bits of 5 to the left)
console.log(x >> 1);    // Output: 2 (Shifts bits of 5 to the right)  


// **********************************************
// Example of typeof operator
let myVar = "Hello";
console.log(typeof myVar); // Output: string
// Example of instanceof operator
let myArray = [1, 2, 3];
console.log(myArray instanceof Array); // Output: true (myArray is an instance of Array)


// **********************************************
// Example of spread and rest operators
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}   
console.log(sum(1, 2, 3, 4)); // Output: 10 (sums all numbers passed as arguments)


// **********************************************
// Example of nullish coalescing operator
let value = null;
let defaultValue = "Default Value";
let result = value ?? defaultValue;
console.log(result); // Output: "Default Value" (since value is null, defaultValue is used)


// **********************************************
// Example of increment and decrement operators
let count = 0;
count++; // Increment count by 1 (equivalent to count = count + 1)
count--; // Decrement count by 1 (equivalent to count = count - 1)
console.log(count); // Output: 0 (count is now back to 0 after increment and decrement) 


// **********************************************
// Example of assignment operator
let x = 10; // Assigns the value 10 to the variable x
x += 5; // This is equivalent to x = x + 5, so now x is 15
let y = 20;
y -= 5; // This is equivalent to y = y - 5, so now y is 15
console.log(x); // Output: 15
console.log(y); // Output: 15


// **********************************************
// Example of comparison operator   
let a = 10;
let b = 5;
console.log(a == b); // Output: false (10 is not equal to 5)
console.log(a === b); // Output: false (10 is not strictly equal to 5)
console.log(a != b); // Output: true (10 is not equal to 5)
console.log(a !== b); // Output: true (10 is not strictly equal to 5)
console.log(a > b); // Output: true (10 is greater than 5)
console.log(a < b); // Output: false (10 is not less than 5)        
console.log(a >= b); // Output: true (10 is greater than or equal to 5)
console.log(a <= b); // Output: false (10 is not less than or equal to 5)


// **********************************************
// Example of logical operators
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // Output: false (AND operator)
console.log(isTrue || isFalse); // Output: true (OR operator)
console.log(!isTrue); // Output: false (NOT operator)


// **********************************************


*/
