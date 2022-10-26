// For Loop

// for(i = 0; i < 10; i++){
  // console.log('Number ' + i);
//   if(i === 4){
//     console.log('My favorite number is 4');
//     break;
//   }
//   if(i === 8){
//     console.log('Stop the loop');
//     break;
//   }
//   console.log(i);
// }

// WHILE Loop

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// let i = 0;

// do{
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// Looping through an array

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// For Each
// cars.forEach(function(car){
//   console.log(car);
// })

// Map

// const users = [
//   {id: 1, name: 'Jamal'},
//   {id: 2, name: 'Olumide'},
//   {id: 3, name: 'Tolulope'},
//   {id: 4, name: 'Oluwafemi'},
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

const user = {
  firstName: 'Jamal',
  lastName: 'Olakunle',
  age: 24
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}