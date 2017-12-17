
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];

// Filter
const carsIncludingO = cars.filter(function(item){
  return item.indexOf('o') > -1
});

console.log(carsIncludingO); // [ 'Volvo', 'Ford' ]

// Reduce
const sum = [1, 2, 3, 4, 5].reduce(function(accumulator, item) {
  return accumulator + item;
}, 0);

console.log(sum); // 15
