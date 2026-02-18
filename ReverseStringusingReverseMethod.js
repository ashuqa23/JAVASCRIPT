// Declare a string
/* let str = "javascript";
// Reverse a string using builtin methods
let reversed = str.split("").reverse().join("");
//Print the result
console.log("Original string :", str);
console.log("Reversed string :", reversed); */

// Import readline module
const readline = require("readline");
// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Ask user for input
rl.question("Enter a string", function(input) {
    // Reverse string using built in method
    let reversed = input.split("").reverse().join("");
    // Print the result
    console.log("Reversed string:", reversed);
    // Close the interface
    rl.close();
});