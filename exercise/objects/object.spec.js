/*
* Transform list to object where the key is id as a string
* Reduce could help
*
* To run tests with file watching run: yarn jest exercise/objects/object.spec.js -- --watch
*/
const names = [
  {
    name: 'John',
    lastName: 'Doe',
    age: 33,
    id: 1,
  }, {
    name: 'Joseph',
    lastName: 'Newton',
    age: 33,
    id: 2,
  }, {
    name: 'Kill',
    lastName: 'Bill',
    age: 33,
    id: 3,
  }, {
    name: 'Carl',
    lastName: 'Carlson',
    age: 33,
    id: 4,
  },
];

const transformArrayToObject = arr => arr;


it('Object should be transformed', () => {
  expect(transformArrayToObject(names)).toEqual({
    1: {
      name: 'John',
      lastName: 'Doe',
      age: 33,
      id: 1,
    },
    2: {
      name: 'Joseph',
      lastName: 'Newton',
      age: 33,
      id: 2,
    },
    3: {
      name: 'Kill',
      lastName: 'Bill',
      age: 33,
      id: 3,
    },
    4: {
      name: 'Carl',
      lastName: 'Carlson',
      age: 33,
      id: 4,
    },
  });
});
