function Name(name) {
  this.name = name;
}

function FullName(name, lastname) {
  Name.call(this, name);
  this.lastname = lastname;
}

const instanceFullName = new FullName('John', 'Doe');

console.log(instanceFullName.name, instanceFullName.lastname);
