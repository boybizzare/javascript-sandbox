// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar'       adding a property
console.log(name2);

if (name2 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// Number

const num1 = 5;
const num2 = new Number(5);

// console.log(typeof num1);

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

// console.log(typeof bool2);

// Functions

const getSum1 = function (x, y) {
  return x + y;
}

// console.log(getSum1(1,1));

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// console.log(getSum2(1, 1));

// Object

const jamal1 = { name: 'Jamal' };
const jamal2 = new Object({ name: 'Jamal' });

// console.log(typeof jamal1);

// Arrays

const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(typeof arr1)
console.log(typeof arr2);

// Regular expressions

const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2)