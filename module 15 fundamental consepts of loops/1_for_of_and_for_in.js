// 15_1 What is a Loop, explore for loop

const number = [ 12, 14,376,235];
 console.log(number);

 // getting output one by one
//   for (const num of number ){
//     console.log(num);
//   }

// ✅ for...of Example (Array values)
const fruits = ["Orange", "Mango", "Banana", "Jackfruit"];
 for ( const fruit of fruits){
    console.log(fruit)
     console.log("I want to Eat")
 }


/* from ai learning

const colors = ["Red", "Green", "Blue"];

// ✅ for...in Example (Array indexes)
for (const index in colors) {
  console.log(index);        // 0, 1, 2
  console.log(colors[index]); // Red, Green, Blue
}


const person = { name: "Montu", age: 16 };

// ✅ for...in Example (Object keys)
for (const key in person) {
  console.log(key);         // name, age
  console.log(person[key]); // Montu, 16
}

 */