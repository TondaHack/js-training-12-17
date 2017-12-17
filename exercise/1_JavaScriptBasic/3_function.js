/*
 * Write code that receives two strings, converts them to floats and add them
 *
 * Example:
 * "3" + "3" = 6
 * "3.5" + "3.5" = 8
 *
 * Be careful with decimals
 * String object could be helpful https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * Run in terminal node exercise/1_JavaScriptBasic/3_function.js
 */
const addNumbers = (x, y) => {
  return x + y;
};

console.log(addNumbers('4', '5')); // 9
console.log(addNumbers('3.5', '3.5')); // 7
console.log(addNumbers('3,5', '3,5')); // 7
console.log(addNumbers(undefined, '3,5')); // 3.5
