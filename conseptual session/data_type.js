
/* Data Type in Javascript:
A data type in JavaScript is a classification that determines the kind of value a variable can hold. JavaScript has several built-in data types, which can be categorized into two main groups: primitive types and object types.

1. Primitive Types:
   - **Number**: Represents numeric values, both integers and floating-point numbers. Example: `let age = 30;`

    - **Undefined**: Represents a variable that has been declared but not assigned a value. Example: `let uninitialized;`

    - **Symbol**: Represents a unique and immutable value, often used as object property keys. Example: `let uniqueId = Symbol('id');`

    - **Object**: Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Example: `let person = { name: "John", age: 25 };`

    - **Function**: A special type of object that can be called or invoked. Example: `function greet() { console.log("Hello!"); }`

    - **Null**: Represents the intentional absence of any object value. Example: `let emptyValue = null;`

    - **BigInt**: Represents integers with arbitrary precision, useful for very large numbers. Example: `let bigNumber = 1234567890123456789012345678901234567890n;`
   - **String**: Represents a sequence of characters enclosed in single or double quotes. Example: `let name = "Alice";`
   - **Boolean**: Represents a logical value, either `true` or `false`. Example: `let isActive = true;`
    - A data type is a classification that specifies which type of value a variable can hold.
**********************************
object or non-primitive data types:
   - **Object**: A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Example: `let person = { name: "John", age: 30 };`

   - **Array**: A special type of object that holds an ordered list of values. Example: `let numbers = [1, 2, 3, 4];`

   - **Function**: A callable object that can execute code. Example: `function sayHello() { console.log("Hello!"); }`

    - **Date**: Represents a specific point in time. Example: `let currentDate = new Date();`

    - **RegExp**: Represents a regular expression used for pattern matching in strings. Example: `let regex = /abc/;`

    - **Error**: Represents an error that occurs during the execution of a program. Example: `let error = new Error("Something went wrong!");`

typeof means to check the data type of a variable in js:like typeof variableName;
e.g.
let age = 30;
console.log(typeof age); // Output: "number"
*/


/**********************number data type in js:
In JavaScript, the `number` data type is used to represent both integer and floating-point numbers. JavaScript uses a double-precision 64-bit binary format (IEEE 754) for all numeric values, which means it can handle a wide range of numbers, including very large and very small values.

parseInt() and parseFloat() are used to convert strings to numbers in JavaScript.


****************************string data type in js:
In JavaScript, the `string` data type is used to represent a sequence of characters. Strings can be enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals. Strings are immutable, meaning once created, they cannot be changed directly.
like:
let name = "John";
let greeting = 'Hello, World!';
let template = `Hello, ${name}!`; // Template literal with interpolation
strings can be concatenated using the `+` operator or template literals.
Example:
let fullName = "John" + " " + "Doe"; // Concatenation using +
let message = `Welcome, ${fullName}!`; // Using template literals

****************************boolean data type in js:
In JavaScript, the `boolean` data type represents a logical entity and can have only two values: `true` or `false`. Booleans are often used in conditional statements to control the flow of a program.

****************************undefined data type in js:
In JavaScript, the `undefined` data type represents a variable that has been declared but has not been assigned a value. It is a primitive data type and indicates the absence of a value or that a variable has not been initialized.

****************************null data type in js:
In JavaScript, the `null` data type represents the intentional absence of any object value. It is a primitive data type and is often used to indicate that a variable should not point to any object or value.


*/

/***************************************************************************************************others data type:

****************************bigint data type in js:
In JavaScript, the `bigint` data type is used to represent integers with arbitrary precision. It allows you to work with numbers larger than the maximum safe integer value (`Number.MAX_SAFE_INTEGER`, which is 2^53 - 1). BigInt values are created by appending `n` to the end of an integer literal or by using the `BigInt()` constructor.
Example:
let largeNumber = 1234567890123456789012345678901234567890n; // Using 'n' suffix
let anotherLargeNumber = BigInt("1234567890123456789012345678901234567890"); // Using BigInt constructor

****************************object data type in js:
In JavaScript, the `object` data type is a non-primitive data type that represents a collection of key-value pairs. Objects can store multiple values and can be used to model complex data structures. They are created using curly braces `{}` or the `new Object()` syntax.
Example:
let person = {
  name: "Alice",
  age: 30,  
****************************symbol data type in js:
In JavaScript, the `symbol` data type is a unique and immutable primitive value that can be used as an identifier for object properties. Symbols are often used to create private or unique keys for object properties, ensuring that they do not conflict with other property names.
Example:


*/
// *************************************************************************************************************************************
/* non primitive data types in js:
In JavaScript, non-primitive data types are those that can hold collections of values or more complex entities. The main non-primitive data types include:

1. **Object**: A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Objects can represent real-world entities and can contain methods.
   Example: `let person = { name: "John", age: 30 };`
collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Objects can represent real-world entities and can contain methods.




2. **Array**: A special type of object that holds an ordered list of values. Arrays can contain elements of any data type and can be manipulated using various array methods.
   Example: `let numbers = [1, 2, 3, 4];`
strings, numbers, booleans, objects, or even other arrays. Arrays are used to store lists of items and can be manipulated using various array methods.



3. **Function**: A callable object that can execute code. Functions can take parameters and return values, and they can be assigned to variables or passed as arguments.
   Example: `function greet() { console.log("Hello!"); }`
functions are objects that can be called or invoked. They can take parameters and return values, and they can be assigned to variables or passed as arguments.
e.g. `function add(a, b) { return a + b; }`

4. **Date**: Represents a specific point in time. The Date object provides methods for working with dates and times, such as getting the current date or formatting dates.
   Example: `let currentDate = new Date();`
used to work with dates and times, allowing you to create, manipulate, and format dates.

5. **RegExp**: Represents a regular expression used for pattern matching in strings. Regular expressions are powerful tools for searching and manipulating text.
   Example: `let regex = /abc/;`
used for pattern matching in strings, allowing you to search for specific patterns or validate input.

6. **Error**: Represents an error that occurs during the execution of a program. The Error object can be used to create custom error messages and handle exceptions.
    Example: `let error = new Error("Something went wrong!");`

7. **Map**: A collection of key-value pairs where keys can be of any data type. Maps maintain the insertion order of elements and allow for efficient retrieval.
   Example: `let map = new Map(); map.set('key1', 'value1');`

8. **Set**: A collection of unique values, where each value can only occur once. Sets are useful for storing distinct items and can be iterated over.
    Example: `let set = new Set([1, 2, 3, 4]);`

9. **WeakMap**: Similar to Map, but keys must be objects and are weakly referenced, meaning they can be garbage collected if there are no other references to them.
   Example: `let weakMap = new WeakMap();` 
   
   
10. **WeakSet**: Similar to Set, but values must be objects and are weakly referenced, allowing for garbage collection.
    Example: `let weakSet = new WeakSet();`

These non-primitive data types allow JavaScript to handle complex data structures and provide powerful features for building applications. They can be manipulated using various methods and properties, making them versatile tools for developers.


*/

// *************************************************************************************************************************************
/* difference between primitive and non-primitive data types in js:

Primitive data types in JavaScript are the basic building blocks of data, while non-primitive data types are more complex structures that can hold collections of values or more intricate entities. Here are the key differences:

1. **Definition**:
   - **Primitive Data Types**: These are the most basic data types that represent single values. They include `Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`, and `BigInt`.
   - **Non-Primitive Data Types**: These are more complex data structures that can hold multiple values or properties. They include `Object`, `Array`, `Function`, `Date`, `RegExp`, `Map`, `Set`, `WeakMap`, and `WeakSet`.

2. **Mutability**:
   - **Primitive Data Types**: They are immutable, meaning once a value is assigned, it cannot be changed. For example, if you change a string, a new string is created rather than modifying the original.
   - **Non-Primitive Data Types**: They are mutable, meaning their contents can be changed. For example, you can add or remove properties from an object or elements from an array.

3. **Memory Allocation**:
   - **Primitive Data Types**: They are stored directly in the stack memory, which makes them faster to access and manipulate.
   - **Non-Primitive Data Types**: They are stored in the heap memory, which allows for more complex structures but can be slower to access due to the overhead of managing references.

4. **Reference vs. Value**:
   - **Primitive Data Types**: When you assign a primitive value to a variable, the value is copied directly. For example, if you assign a number to a variable, changing that variable does not affect the original value.
   - **Non-Primitive Data Types**: When you assign a non-primitive value to a variable, you are assigning a reference to the object in memory. This means that changes made through one reference will affect all references to that object.

5. **Type Checking**:
   - **Primitive Data Types**: You can use the `typeof` operator to check the type of a primitive value. For example, `typeof 42` returns `"number"`.
   - **Non-Primitive Data Types**: You can also use `typeof` for non-primitive types, but it will return `"object"` for objects and arrays. To check for specific non-primitive types, you may need to use methods like `Array.isArray()` or `instanceof`.

6. **Use Cases**:
   - **Primitive Data Types**: They are typically used for simple values like numbers, strings, and booleans, where you need to perform basic operations.
   - **Non-Primitive Data Types**: They are used for more complex data structures, such as collections of items (arrays), key-value pairs (objects), or functions that can be executed.

7. **Examples**:
    - **Primitive Data Types**: 
        - `let age = 30;` (Number)  
        - `let name = "Alice";` (String)
        - `let isActive = true;` (Boolean)
        - `let notAssigned;` (Undefined)
        - `let emptyValue = null;` (Null)
        - `let uniqueId = Symbol('id');` (Symbol)
        - `let bigNumber = 1234567890123456789012345678901234567890n;` (BigInt)
**************************************************

    - **Non-Primitive Data Types**:
        - `let person = { name: "John", age: 30 };` (Object)
        - `let numbers = [1, 2, 3, 4];` (Array)
        - `function greet() { console.log("Hello!"); }` (Function)
        - `let currentDate = new Date();` (Date)
        - `let regex = /abc/;` (RegExp)
        - `let map = new Map(); map.set('key1', 'value1');` (Map)
        - `let set = new Set([1, 2, 3, 4]);` (Set)
        - `let weakMap = new WeakMap();` (WeakMap)
        - `let weakSet = new WeakSet();` (WeakSet)

        

*/