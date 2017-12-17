
const obj = {
  name: 'Joe',
  age: 30,
  tShirtSize: 'L',
  address: 'Prague',
};

// You can access object properties in two ways:
console.log(obj.name);
console.log(obj.name);

Object.keys(obj).map((key) => {
  console.log(obj[key]);
  return obj[key];
});
