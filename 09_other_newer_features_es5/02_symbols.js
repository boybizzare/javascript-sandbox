// Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123')); // No two symbols are the same

// console.log(`Hello ${sym1.toString()}`)
// console.log(`Hello ${String(sym1)}`)

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
// for (let i in myObj) {
//   console.log(`${i}:${myObj[i]}`);
// }

// Symbols are ignored by JSON.stringify()
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('123')]: 'prop' }));

console.log(JSON.stringify({ KEY1 }));