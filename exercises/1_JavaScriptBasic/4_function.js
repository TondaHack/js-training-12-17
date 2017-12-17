/*
 * Write code that find max and min in array
 * Object Math and method apply could help
 * Run in terminal node exercises/1_JavaScriptBasic/4_function.js
 */
const findMax = arr => ({
  min: arr,
  max: arr,
});

console.log(findMax([1, 2, 3, 4, 5, 6])); // {min: 1, max: 6}
console.log(findMax([-55])); // {min: -55, max: -55}
console.log(findMax([-1222, 44, 55, 77, 9])); // {min: -1222, max: 77}
