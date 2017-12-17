
// Key-Value object
const person = {
  name: 'John',
  lastName: 'Doe',
};

console.log(person.name, person.lastName); // John Doe

function getFullName(dataObject) {
  return `${dataObject.name} ${dataObject.lastName}`;
}

console.log(getFullName(person)); // John Doe

// Type of
console.log(typeof undefined); // undefined
console.log(typeof 'rrr'); // string
console.log(typeof 33.444); // number
console.log(typeof Symbol('mystring')); // symbol

// Objects
// function is Function Object
console.log(typeof getFullName); // function
console.log(typeof new Date()); // object
console.log(typeof null); // object
// eslint-disable-next-line no-array-constructor
console.log(typeof new Array(), typeof []); // object object

class TestClass {}
console.log(typeof TestClass); // function
