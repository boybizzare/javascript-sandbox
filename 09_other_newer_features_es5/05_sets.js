// SETS - Store unique values of any data type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('String');
set1.add({ name: 'Jamal' });
set1.add(true);
set1.add(100); // renders only one type of the same data

// const set2 = new Set([100, 'string', { name: 'Jamal' }, true]); // another method of creating the set object
// console.log(set2)

console.log(set1);

// Get count of values
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'Jamal'})) // tells false

// console.log({ name: 'Jamal' } === { name: 'Jamal' }); 

// Delete from set
// set1.delete(100);

// console.log(set1);

// Iterating through sets

// For...of
for (let item of set1.entries()) {
  // console.log(item);
}

// ForEach loop
set1.forEach((values) => {
  // console.log(values);
});

// Converting sets into arrays
const setArr = Array.from(set1);
console.log(setArr);