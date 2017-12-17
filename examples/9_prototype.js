
function PersonName(data) {
  this.name = data.name;
}

const John = new PersonName({ name: 'John' });
console.log(John.name); // John

PersonName.prototype.uppName = function () {
  return this.name.toUpperCase();
};
console.log(John.uppName()); // JOHN
