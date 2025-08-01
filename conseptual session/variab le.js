/* variable in js:

Variables in JavaScript are used to store data values. They can be declared using the `var`, `let`, or `const` keywords.

1. `var` is function-scoped and can be re-declared and updated. var is old way to declare variables and has some issues with hoisting and scope.

It is generally recommended to use `let` or `const` instead of `var` in modern JavaScript.


2. `let` is block-scoped and can be updated but not re-declared in the same scope.modern way to declare variables.
It is used when you want to declare a variable that can change its value later, but you want to limit its scope to the block in which it is defined.

3. `const` is also block-scoped but cannot be updated or re-declared. const is used to declare variables that should not change their value after being assigned.
It is used for constants or variables that should not be reassigned, such as configuration values or fixed data.  

*/

// **********************************************

/* 
var , let, const
var x = 10; // can be re-declared and updated

how to declare variable in js
var name = "john"; 
here variable name is declared using var keyword and assigned a value of "john".

variable declaration and initialization means creating a variable and assigning it a value at the same time.

that means declaration is the process of creating a variable, and initialization is the process of assigning a value to that variable.

*/

// **********************************************
/* 
naming conventions for variables in js:
1. Variable names can contain letters, digits, underscores (_), and dollar signs ($).

2. Variable names must start with a letter, underscore, or dollar sign.

3. Variable names are case-sensitive, meaning `myVar` and `myvar` are different variables.

4. Variable names should not be a reserved keyword in JavaScript (like `var`, `let`, `const`, `function`, etc.).

5. It is a common convention to use camelCase for variable names, where the first word is lowercase and subsequent words are capitalized (e.g., `myVariableName`). or you can use snake_case (e.g., `my_variable_name`). or pascalCase (e.g., `MyVariableName`).

6. Avoid using single-letter variable names except for loop counters or temporary variables.

7. Use descriptive names that indicate the purpose of the variable, making your code more readable and maintainable.like age, firstName, totalAmount, etc. 
e.g var firstName = "John"; // descriptive variable name

8. If a variable name consists of multiple words, you can use underscores or camelCase to separate them for better readability.

9. Avoid using special characters or spaces in variable names, as they can lead to syntax errors.
like var my-variable = "value";  or 
var my variable = "value"; 
*/