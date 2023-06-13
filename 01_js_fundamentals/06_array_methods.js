// create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

val = numbers[3];
// insert into an array

numbers[2] = 100;

// Find the index of value
val = numbers.indexOf(36);

// Reduce method
// const addNumbers = numbers.reduce((total, number) => {
//   return total + number
// }, 0);

// console.log(addNumbers);

const players = [
  { name: 'Rashford', goals: 30 },
  { name: 'Halaand', goals: 52 },
  { name: 'Harry', goals: 37 },
  { name: 'Mbappe', goals: 37 },
];

const result = players.reduce((groupedPlayers, player) => {
  const goals = player.goals;
  if (groupedPlayers[goals] == null) groupedPlayers[goals] = [];
  groupedPlayers[goals].push(player);
  return groupedPlayers;
}, {});

console.log(result);

// // MUTATING arrays
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice out from between
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// concatenate arrays
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // use the compare function
// val = numbers.sort(function(x,y){
//   return x - y;
// });

// val = numbers.sort(function(x,y){
//   return y - x;
// });

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

// console.log(numbers);
// console.log(val);
