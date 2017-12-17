const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];

const carsLowerCase = cars.map(function(item) {
  return item.toLowerCase()
});

console.log(carsLowerCase); // [ 'bmw', 'volvo', 'saab', 'ford' ]

cars.forEach(function(item, i) {
  console.log(item, i);
});
// BMW 0
// Volvo 1
// Saab 2
// Ford 3
