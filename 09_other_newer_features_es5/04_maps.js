// Maps = key - value pairs - can use ANY type as a key or value

const map1 = new Map();

// set keys
const key1 = 'some string',
  key2 = {},
  key3 = function () { };
  

// set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// get map values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Counting values
// console.log(map1.size);

// Iterating through maps

// Loop using for... of to get keys and values
// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }


// Iterate keys only
// for ( let key of map1.keys() ) {
//   console.log(key);
// }

// Iterate values only
// for (let value of map1.values()) {
//   console.log(value);
// }

// Loop with forEach method
// map1.forEach(function (value, key) {
//   console.log(`${key} = ${value}`);
// });


// Converting to arrays

// Creating an array of they key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Creating an array of the values 
const valArr = Array.from(map1.values());
console.log(valArr);

// Creating an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);