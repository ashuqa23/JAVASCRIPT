// Import readline module
const readline = require("readline");
// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for input
rl.question("Enter a string: ", function (input) {

    let reversed = "";

    // Reverse using loop (no built-in reverse)
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }

    // Print result
    console.log("Reversed String:", reversed);

    // Close interface
    rl.close();
});
