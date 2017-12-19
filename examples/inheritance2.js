function Mammal(name) {
  this.name = name;
}

Mammal.prototype.getName = function getName() {
  return this.name;
};

function Cat(name, age) {
  this.name = name;
  this.age = age;
}

Cat.prototype = new Mammal();
Cat.prototype.constructor = Cat;

Cat.prototype.getEverythingAboutCat = function getAge() {
  return `${this.name}: ${this.age}`;
};

const catInstance = new Cat('Mici', 3);
const mammalInstance = new Mammal('Elephant');

console.log(catInstance.getName()); // Mici
console.log(catInstance.getEverythingAboutCat()); // Mici: 3
console.log(mammalInstance.getName()); // Elephant