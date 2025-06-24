// Control Statements in JavaScript

// Control statements in JavaScript are used to control the flow of execution of the program. They allow you to make decisions, repeat actions, and handle exceptions. The main types of control statements include conditional statements, loops, and exception handling.

// 1. Conditional Statements
// Conditional statements allow you to execute different blocks of code based on certain conditions. The main conditional statements in JavaScript are `if`, `else if`, `else`, and `switch`.

// Example of `if`, `else if`, and `else` statements
let age = 18;
if (age < 18) {
    console.log("You are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
}
else {
    console.log("You are a senior citizen.");
}

console.log("\n"); // add new line
// Example of `switch` statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// 2. Loops
// Loops allow you to execute a block of code repeatedly until a certain condition is met. The main types of loops in JavaScript are `for`, `while`, and `do...while`.

console.log("\n");
// Example of `for` loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// add new line
console.log("\n");


// Example of `while` loop
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j);
    j++;
}

console.log("\n");
// Example of `do...while` loop
let k = 0;
do {
    console.log("Do...While Loop Iteration:", k);
    k++;
}while (k < 5);