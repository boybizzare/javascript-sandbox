// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

// Rest pattern ... is  called a spread operator
// [a, b, c, ...rest] = [100, 200, 300, 400, 500, 600];

({ a, b } = { a: 10, b: 20, c: 30, d: 40, e: 50 });
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40, e: 50 });

// Array Destructuring

// const people = ['Jamal', 'Oluwole', 'Wisdom'];

// const [person1, person2, person3] = people;

// Parse array returned from function 
// function getPeople() {
//   return ['Jamal', 'Oluwole', 'Wisdom'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);


// Object destructuring

const person = {
  name: 'Jamal',
  age: 24,
  city: 'Lagos',
  gender: 'Male',
  sayHello: function () {
    console.log('Hello');
  }
}

// Old ES5 way
// const name = person.name,
//   age = person.age,
//   city = person.city;

//   console.log(name, age, city);

// New ES6 destructuring 
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();