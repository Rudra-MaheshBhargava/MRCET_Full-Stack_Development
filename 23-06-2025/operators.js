// Operators in JavaScript
// Operators are special symbols that perform operations on variables and values. JavaScript supports various types of operators, including arithmetic, assignment, comparison, logical, and more. Here are some examples of different types of operators in JavaScript:

// 1. Arithmetic Operators
// Arithmetic operators are used to perform mathematical operations like addition, subtraction, multiplication, and division.
let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("a =", a, ", b =", b); // Output the values of a and b
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus (remainder of division)
let exponent = a ** b; // Exponentiation (a raised to the power of b)
console.log("Arithmetic Operators:");
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Exponent:", exponent);
console.log("\n"); // add new line

// 2. Assignment Operators
// Assignment operators are used to assign values to variables. They can also perform operations while assigning.
let x = 10; // Assignment
x += 5; // Addition assignment (x = x + 5)
x -= 3; // Subtraction assignment (x = x - 3)
x *= 2; // Multiplication assignment (x = x * 2)
x /= 4; // Division assignment (x = x / 4)
x %= 3; // Modulus assignment (x = x % 3)
console.log("Assignment Operators:");
console.log("x after assignments:", x);
console.log("\n"); // add new line

// 3. Comparison Operators
// Comparison operators are used to compare two values and return a boolean result (true or false).
let isEqual = (a == b); // Equal to (value only)
let isStrictEqual = (a === b); // Strict equal to (value and type)
let isNotEqual = (a != b); // Not equal to (value only)
let isStrictNotEqual = (a !== b); // Strict not equal to (value and type)
let isGreaterThan = (a > b); // Greater than
let isLessThan = (a < b); // Less than
let isGreaterThanOrEqual = (a >= b); // Greater than or equal to
let isLessThanOrEqual = (a <= b); // Less than or equal to
console.log("Comparison Operators:");
console.log("Is Equal:", isEqual);
console.log("Is Strict Equal:", isStrictEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Is Strict Not Equal:", isStrictNotEqual);
console.log("Is Greater Than:", isGreaterThan);
console.log("Is Less Than:", isLessThan);
console.log("Is Greater Than or Equal:", isGreaterThanOrEqual);
console.log("Is Less Than or Equal:", isLessThanOrEqual);
console.log("\n"); // add new line

// 4. Logical Operators
// Logical operators are used to combine multiple boolean expressions and return a boolean result.
let andOperator = (a > 0 && b > 0); // Logical AND
let orOperator = (a > 0 || b < 0); // Logical OR
let notOperator = !(a < b); // Logical NOT
console.log("Logical Operators:");
console.log("AND Operator:", andOperator);
console.log("OR Operator:", orOperator);
console.log("NOT Operator:", notOperator);
console.log("\n"); // add new line

// 5. Bitwise Operators
// Bitwise operators perform operations on binary representations of numbers.
let bitwiseAnd = a & b; // Bitwise AND
let bitwiseOr = a | b; // Bitwise OR
let bitwiseXor = a ^ b; // Bitwise XOR
let bitwiseNot = ~a; // Bitwise NOT
let leftShift = a << 1; // Left shift (shift bits to the left)
let rightShift = a >> 1; // Right shift (shift bits to the right)
console.log("Bitwise Operators:");
console.log("Bitwise AND:", bitwiseAnd);
console.log("Bitwise OR:", bitwiseOr);
console.log("Bitwise XOR:", bitwiseXor);
console.log("Bitwise NOT:", bitwiseNot);
console.log("Left Shift:", leftShift);
console.log("Right Shift:", rightShift);
console.log("\n"); // add new line

// 6. Ternary Operator
// The ternary operator is a shorthand for the `if...else` statement. It takes three operands: a condition, a value if true, and a value if false.
let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Ternary Operator:");
console.log("Eligibility:", eligibility);
console.log("\n"); // add new line

// 7. Typeof Operator
// The `typeof` operator is used to determine the type of a variable or value.
let variableType = typeof a; // Get the type of variable 'a'
console.log("Typeof Operator:");
console.log("Type of variable 'a':", variableType);
console.log("\n"); // add new line