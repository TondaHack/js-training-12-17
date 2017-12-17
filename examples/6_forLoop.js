
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
let text = '';
const len = cars.length;
let i;

for (i = 0; i < len; i++) { // eslint-disable-line no-plusplus
  text += `${cars[i]}`;
}

console.log(text); // BMW Volvo Saab Ford

console.log(cars.join(' ')); // BMW Volvo Saab Ford
