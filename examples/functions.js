// Function Declarations

// Simple syntax named
function multiplyFive(value) {
  return value * 5;
}

// Reference to function
const multiplyFiveReference = multiplyFive;

// Arrow function
const multiply = (val1, val2) => val1 * val2;


console.log(multiplyFive(5)); // 25
console.log(multiplyFiveReference(5)); // 25
console.log(multiply(5, 5)); // 25

// Function as a expression
const calculation = multiply(5, 5) / 5;

console.log(calculation); // 5
