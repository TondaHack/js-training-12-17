
function destructuringExample({ key1 = 'x', key2, key3 }) {
  console.log([key1, key2, key3].join(', '));
}

const ke1 = 'key1';

const obj = {
  [ke1]: 'key1 str',
  key2: 'key1 str 2',
  key3: 'key1 str 3',
};

destructuringExample(obj);
