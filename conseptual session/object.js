// objects , properties, methods, nesting, looping, dot notation, array notation

var person = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        zip: "10001"
    }
};


isStudent: true,
console.log(person); // Output: { name: "John", age: 30, city: "New York", isStudent: true }

console.log(person.name); // Output: John (accessing property using dot notation)

console.log(person["age"]); // Output: 30 (accessing property using array notation)

console.log(person["isStudent"]); // Output: true (accessing property using array notation)

let isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(isAdult); // Output: "You are an adult." (if age is 18 or more, otherwise "You are a minor.")

// Accessing nested properties
console.log(person.adress.street); // Output: "123 Main St" (accessing nested property using dot notation)
console.log(person["adress"]["zip"]); // Output: "10001" (accessing nested property using array notation)

delete person.city; // Deleting a property
console.log(person); // Output: { name: "John", age: 30, adress: { street: "123 Main St", zip: "10001" }, isStudent: true }

// Looping through properties
for (let key in person) {
    console.log(key);
    console.log(key + ": " + person[key]); // Output: name: John, age: 30, adress: [object Object], isStudent: true
}   


// Modifying a property
person.age = 31;
console.log(person.age); // Output: 31 (modified age)

console.log(person.city); // Output: New York (accessing property using dot notation)

// Adding a new property
person.country = "USA";
console.log(person); // Output: { name: "John", age: 30, city: "New York", isStudent: true, country: "USA" }    