/*
* Try to resolve reference problem. Person should't change after mutate personCopy.
* To run tests with file watching run:
* yarn jest exercise/2_objects/reference.spec.js -- --watch
*
*/

const person = {
  name: 'John',
  lastName: 'Doe',
};

const personCopy = person;

personCopy.name = 'Joseph';


it('Name of person object should be John', () => {
  expect(person.name).toEqual('John');
});

it('Name of personCopy object should be Joseph', () => {
  expect(personCopy.name).toEqual('Joseph');
});
