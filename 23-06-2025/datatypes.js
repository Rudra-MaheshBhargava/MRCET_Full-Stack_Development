// datatypes in javascript
// Data types in JavaScript include:

// 1. Primitive Types:
//    - Number: Represents both integer and floating-point numbers.
//    - String: Represents a sequence of characters enclosed in single or double quotes.
//    - Boolean: Represents a logical entity and can have two values: true or false.
//    - Undefined: A variable that has been declared but not assigned a value.
//    - Null: Represents the intentional absence of any object value.
//    - Symbol: A unique and immutable primitive value, often used as object property keys.
//    - BigInt: Represents integers with arbitrary precision, useful for large integers.

// 2. Non-Primitive Types:
//    - Object: A collection of properties, where each property is a key-value pair.
//    - Array: A special type of object used to store ordered collections of values.
//    - Function: A callable object that can be invoked to perform a specific task.

// example of different data types in JavaScript

// Primitive data types
let number = 42; // Number
let string = "Hello, World!"; // String
let boolean = true; // Boolean
let undefinedVar; // Undefined // (not assigned a value)
let nullVar = null; // Null
let symbolVar = Symbol("unique"); // Symbol // (unique identifier)  // (often used as object property keys)
let bigIntVar = BigInt(123456789012345678901234567890); // used for large integers

// non-primitive data types
let objectVar = { key: "value"}; // Object // (collection of key-value pairs)
let arrayVar = [1, 2, 3, 4, 5]; // Array  // (ordered collection of values)
let functionVar = function() { return "I am a function"; }; // Function  // (callable object that performs a specific task)

let object2={
// adding multiple key-value pairs
    name: "John Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "gaming", "coding"],
    }

// Output the data types
console.log("Data Types in JavaScript:");
console.log("Number:", number);
console.log("String:", string);
console.log("Boolean:", boolean);
console.log("Undefined:", undefinedVar);
console.log("Null:", nullVar);
console.log("Symbol:", symbolVar);
console.log("BigInt:", bigIntVar);
console.log("Object:", objectVar);
console.log("Array:", arrayVar);
console.log("Function:", functionVar());
console.log("OBJ2:",object2);