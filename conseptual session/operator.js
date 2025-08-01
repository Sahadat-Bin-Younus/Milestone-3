// operator
/* operator.js

Operators in JavaScript are special symbols that perform operations on variables and values. They can be categorized into several types:
1. Arithmetic Operators: Used to perform mathematical operations.
2. Assignment Operators: Used to assign values to variables.
3. Comparison Operators: Used to compare two values.
4. Logical Operators: Used to perform logical operations.
5. Bitwise Operators: Used to perform operations on binary representations of numbers.
6. Ternary Operator: A shorthand for an `if-else` statement.
7. Type Operators: Used to check the type of a variable.
8. Unary Operators: Operate on a single operand.
9. Relational Operators: Used to compare two values and return a boolean result.
10. Spread and Rest Operators: Used to expand or collect elements in arrays and objects.
11. Nullish Coalescing Operator: Used to provide a default value when dealing with `null` or `undefined`. 


// ***********************************************
/*
increment and decrement operators are also used to increase or decrease the value of a variable by 1.
like:
let count = 0;
count++; // Increment count by 1 (equivalent to count = count + 1)
count--; // Decrement count by 1 (equivalent to count = count - 1)
These operators are often used in loops or when you need to keep track of a count or index.

*/


// **********************************************
/* 
1. Arithmetic Operators:
Arithmetic operators are used to perform mathematical operations on numbers. The basic arithmetic operators in JavaScript include:
- Addition (`+`): Adds two numbers.
- Subtraction (`-`): Subtracts one number from another.
- Multiplication (`*`): Multiplies two numbers.
- Division (`/`): Divides one number by another.
- Modulus (`%`): Returns the remainder of a division operation.
- Exponentiation (`**`): Raises a number to the power of another number.
 basic arithmetic operations in js

Example:
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;
output:
console.log("Sum:", sum);   // Output: Sum: 15
console.log("Difference:", difference); // Output: Difference: 5
console.log("Product:", product); // Output: Product: 50
console.log("Quotient:", quotient); // Output: Quotient: 2
console.log("Remainder:", remainder); // Output: Remainder: 0
console.log("Power:", power); // Output: Power: 100000

*/

// **********************************************
/* 
2. Assignment Operators:
Assignment operators are used to assign values to variables. The basic assignment operator is the equal sign (`=`), but there are also compound assignment operators that combine assignment with another operation.

Example:
let x = 10;
let y = 5;
x += y; // Equivalent to x = x + y; (x is now 15)
x -= y; // Equivalent to x = x - y; (x is now 10)
x *= y; // Equivalent to x = x * y; (x is now 50)
x /= y; // Equivalent to x = x / y; (x is now 10)
x %= y; // Equivalent to x = x % y; (x is now 0)
x **= y; // Equivalent to x = x ** y; (x is now 100000)
output:
console.log("x after assignment:", x); // Output: x after assignment: 100000
console.log("y after assignment:", y); // Output: y after assignment: 5 
*/

// **********************************************
/* comparison Operators:
Comparison operators are used to compare two values and return a boolean result (`true` or `false`). The basic comparison operators in JavaScript include:

- Equal to (`==`): Checks if two values are equal (type coercion occurs).   
- Strict equal to (`===`): Checks if two values are equal and of the same type (no type coercion).
- Not equal to (`!=`): Checks if two values are not equal (type coercion occurs).
- Strict not equal to (`!==`): Checks if two values are not equal or not of the same type (no type coercion).
- Greater than (`>`): Checks if the left value is greater than the right value.
- Less than (`<`): Checks if the left value is less than the right value.
- Greater than or equal to (`>=`): Checks if the left value is greater than or equal to the right value.
- Less than or equal to (`<=`): Checks if the left value is less than or equal to the right value.


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

*/
// **********************************************
/* 
3. Logical Operators:
Logical operators are used to perform logical operations on boolean values. The basic logical operators in JavaScript include:
- Logical AND (`&&`): Returns `true` if both operands are true.
- Logical OR (`||`): Returns `true` if at least one operand is true.
- Logical NOT (`!`): Returns `true` if the operand is false, and vice versa.

Example:
let a = true;
let b = false;
console.log(a && b); // Output: false (both are not true)
console.log(a || b); // Output: true (at least one is true)
console.log(!a); // Output: false (not true)
console.log(!b); // Output: true (not false)    

*/

// **********************************************
/* 
4. Bitwise Operators:
Bitwise operators are used to perform operations on the binary representations of numbers. The basic bitwise operators in JavaScript include:
- Bitwise AND (`&`): Performs a bitwise AND operation.
- Bitwise OR (`|`): Performs a bitwise OR operation.
- Bitwise XOR (`^`): Performs a bitwise XOR operation.
- Bitwise NOT (`~`): Inverts the bits of a number. 
- Left Shift (`<<`): Shifts the bits of a number to the left.
- Right Shift (`>>`): Shifts the bits of a number to the right.
Example:
let a = 5; // Binary: 0101  
let b = 3; // Binary: 0011
console.log(a & b); // Output: 1 (Binary: 0001)
console.log(a | b); // Output: 7 (Binary: 0111) 
console.log(a ^ b); // Output: 6 (Binary: 0110)
console.log(~a); // Output: -6 (Inverts the bits of 5)
console.log(a << 1); // Output: 10 (Shifts bits of 5 to the left)
console.log(a >> 1); // Output: 2 (Shifts bits of 5 to the right)

*/


// **********************************************
/* 
5. Ternary Operator:
The ternary operator is a shorthand for an `if-else` statement. It takes three operands and returns one of two values based on a condition.
Example:
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: "Yes" (since age is 18, which is greater than or equal to 18)
*/

// **********************************************
/* 
6. Type Operators:
Type operators are used to check the type of a variable or value. The basic type operators in JavaScript include:
- `typeof`: Returns the type of a variable or value.
- `instanceof`: Checks if an object is an instance of a specific class or constructor function. 
Example:
let a = 10;
let b = "Hello";
console.log(typeof a); // Output: "number" (a is a number)
console.log(typeof b); // Output: "string" (b is a string)
console.log(a instanceof Number); // Output: false (a is not an instance of Number)
console.log(b instanceof String); // Output: false (b is not an instance of String)
*/

