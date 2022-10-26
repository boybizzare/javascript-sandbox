// if(something){
//   do something
// } else {
//   do something else
// }


const id = '100'

// Equal to

// if(id == 100){
//   console.log('CORRECT')
// } else {
//   console.log('INCORRECT');
// }

// if(id != 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// } 

// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined

// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// if(id <= 200){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

const name = 'Jamal'
const age = 24

// And &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
};

// Or ||
if(age < 16 || age > 65){
  console.log(`${name} is not registered for the race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary Operators
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// without braces
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');