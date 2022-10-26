// // Iterator Example

// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length ? 
//       { value: names[nextIndex++], done: false } : { done: true }
//     }
//   }
// }

// // Create an array of names 
// const namesArr = ['Olakunle', 'Jamal', 'Oluwole'];

// // Init iterator and pass in the array 
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());






// Generator Example
// function* sayNames() {
//   yield 'Olakunle';
//   yield 'Jamal';
//   yield 'Oluwole';
// }

// const names = sayNames();

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());





// ID Creator
function* createIds() {
  let index = 0;
  
  while (true) {
    yield index++;
  }
  
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
