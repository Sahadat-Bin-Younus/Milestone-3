// string , immutable, tolowerCase, toUpperCase, trim, slice, concat, includes, reverse a string
// 

// split, join, replace, includes, startsWith, endsWith, slice, substring, indexOf, lastIndexOf

/* 

*/




/* 
var name = "John Doe";
console.log(name.length); // Output:8

var message = "Hello, World!";
console.log(message.toUpperCase()); // Output: "HELLO, WORLD!"

console.log(message.toLowerCase()); // Output: "hello, world!"  

console.log(message.trim()); // Output: "Hello, World!" (removes leading and trailing spaces)

console.log(message.slice(0, 5)); // Output: "Hello" (extracts characters from index 0 to 4)

console.log(message.substring(7, 12)); // Output: "World" (extracts characters from index 7 to 11)

console.log(message.indexOf("World")); // Output: 7 (finds the index of "World")

console.log(message.lastIndexOf("o")); // Output: 8 (finds the last index of "o")

console.log(message.includes("Hello")); // Output: true (checks if "Hello" is present in the string)

console.log(message.startsWith("Hello")); // Output: true (checks if the string starts with "Hello")

console.log(message.endsWith("!")); // Output: true (checks if the string ends with "!")

console.log(message.replace("World", "JavaScript")); // Output: "Hello, JavaScript!" (replaces "World" with "JavaScript")    */   


//  var message = "Hello, World!";
//   var firstCh = message[0].toUpperCase(); // Convert first character to uppercase
//   var resCh = message.slice(1); // Extract the rest of the string
//    console.log(firstCh.concat(resCh)); // Output: "Hello, World!" (concatenates the first character with the rest of the string)


//    var text = "JavaScript is fun!";
//     console.log(text.includes("fun")); // Output: true (checks if "fun" is present in the string )

    // var sentence = "The quick brown fox jumps over the lazy dog.";
    //  if (sentence.startsWith("The")) {
    //      console.log("The sentence starts with 'The'."); // Output: "The sentence starts with 'The'."
    //  }
    //     if (sentence.endsWith("dog.")) {
    //         console.log("The sentence ends with 'dog.'."); // Output: "The sentence ends with 'dog.'."
    //     }

    //     var words = sentence.split(" ");
    //     console.log(words); // Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

    //     var joinedWords = words.join(" ");
    //     console.log(joinedWords); // Output: "The quick brown fox jumps over the lazy dog." 

    //     var reversedMessage = message.split("").reverse().join("");
    //     console.log(reversedMessage); // Output: "!dlroW ,olleH" (reverses the string)  



    var text = "JavaScript is fun!";
    var temp = " ";
     for (var i = 0; i <text.length; i++) {
         temp = text[i] + temp; // Reverses the string by concatenating characters in reverse order
     }  
        console.log(temp); 

        /* 
        
        // Output: "!nuf si tpircSavaJ" (reversed string)
    // var reversedText = text.split("").reverse().join("");
    // console.log(reversedText); // Output: "!nuf si tpircSavaJ" (reversed string)

    // var str = "Hello, World!";
    // var replacedStr = str.replace("World", "JavaScript");
    // console.log(replacedStr); // Output: "Hello, JavaScript!" (replaces "World" with "JavaScript")
    // var str = "Hello, World!";
    // var replacedStr = str.replace(/o/g, "0"); // Replaces all occurrences of "o" with "0"
    // console.log(replacedStr); // Output: "Hell0, W0rld!" (replaces all "o" with "0")

    // var str = "Hello, World!";
    // var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1"); // Replaces all "o" with "0" and all "l" with "1"
    // console.log(replacedStr); // Output: "He11o, W0r1d!" (replaces all "o" with "0" and all "l" with "1")    
    var str = "Hello, World!";
    var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1").replace(/e/g, "3");
    console.log(replacedStr); // Output: "H3ll0, W0r1d!" (replaces all "o" with "0", all "l" with "1", and all "e" with "3")
    var str = "Hello, World!";
    var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1").replace(/e/g, "3").replace(/H/g, "4");
    console.log(replacedStr); // Output: "4e11o, W0r1d!" (replaces all "o" with "0", all "l" with "1", all "e" with "3", and "H" with "4")  
    var str = "Hello, World!";
    var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1").replace(/e/g, "3").replace(/H/g, "4").replace(/W/g, "5");
    console.log(replacedStr); // Output: "4e11o, 50r1d!" (replaces all "o" with "0", all "l" with "1", all "e" with "3", "H" with "4", and "W" with "5")
    var str = "Hello, World!";
    var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1").replace(/e/g, "3").replace(/H/g, "4").replace(/W/g, "5").replace(/,/g, ";");
    console.log(replacedStr); // Output: "4e11o; 50r1d!" (replaces all "o" with "0", all "l" with "1", all "e" with "3", "H" with "4", "W" with "5", and "," with ";")
    var str = "Hello, World!";
    var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1").replace(/e/g, "3").replace(/H/g, "4").replace(/W/g, "5").replace(/,/g, ";").replace(/!/g, "?");
    console.log(replacedStr); // Output: "4e11o; 50r1d?" (replaces all "o" with "0", all "l" with "1", all "e" with "3", "H" with "4", "W" with "5", "," with ";", and "!" with "?")
    var str = "Hello, World!";
    var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1").replace(/e/g, "3").replace(/H/g, "4").replace(/W/g, "5").replace(/,/g, ";").replace(/!/g, "?").replace(/ /g, "_");
    console.log(replacedStr); // Output: "4e11o;_50r1d?" (replaces all "o" with "0", all "l" with "1", all "e" with "3", "H" with "4", "W" with "5", "," with ";", "!" with "?", and spaces with "_")
    var str = "Hello, World!";
    var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1").replace(/e/g, "3").replace(/H/g, "4").replace(/W/g, "5").replace(/,/g, ";").replace(/!/g, "?").replace(/ /g, "_").replace(/d/g, "6");
    console.log(replacedStr); // Output: "4e11o;_50r16?" (replaces all "o" with "0", all "l" with "1", all "e" with "3", "H" with "4", "W" with "5", "," with ";", "!" with "?", spaces with "_", and "d" with "6")

    // var str = "Hello, World!";
    // var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1").replace(/e/g, "3").replace(/H/g, "4").replace(/W/g, "5").replace(/,/g, ";").replace(/!/g, "?").replace(/ /g, "_").replace(/d/g, "6").replace(/r/g, "7");
    // console.log(replacedStr); // Output: "4e11o;_50r16?" (replaces all "o" with "0", all "l" with "1", all "e" with "3", "H" with "4", "W" with "5", "," with ";", "!" with "?", spaces with "_", and "d" with "6")
// var str = "Hello, World!";
// var replacedStr = str.replace(/o/g, "0").replace(/l/g, "1").replace(/e/g, "3").replace(/H/g, "4").replace(/W/g, "5").replace(/,/g, ";").replace(/!/g, "?").replace(/ /g, "_").replace(/d/g, "6").replace(/r/g, "7").replace(/a/g, "8");
// console.log(replacedStr); // Output: "4e11o;_50r16?" (replaces all "o" with "0", all "l" with "1", all "e" with "3", "H" with "4", "W" with "5", "," with ";", "!" with "?", spaces with "_", and "d" with "6")
        */




        