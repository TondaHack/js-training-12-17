/*
* Try to resolve reference problem. Person should't change after mutate personCopy.
* To run tests with file watching run:
* yarn jest exercises/2_objects/reference.spec.js -- --watch
*
*/

const person = {
  name: 'John',
  lastName: 'Doe',
};

const personCopy = person;

personCopy.name = 'Joseph';


it('should return name John', () => {
  expect(person.name).toEqual('John');
});

it('should return name Joseph', () => {
  expect(personCopy.name).toEqual('Joseph');
});
