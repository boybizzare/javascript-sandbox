const firstName = "Olakunle";
const lastName = "Jamal";
const age = 24;
const str = 'Hello there my name is Jamal';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append

val = "Olakunle "
val += "Jamal"


val = 'Hello, my name is ' + firstName + ' and I am ' + age;

val = 'That\'s awesome, I can\'t wait';

// Length

val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change Case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[5];

// indexOf()
val = firstName.indexOf('k');
val = firstName.lastIndexOf('l');

// charAt
val = firstName.charAt('2');

// Get last charAt
val = firstName.charAt(firstName.length - 1);

// substring

val = firstName.substring(0,4);

// slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split
val = str.split(' ');
val = tags.split(',')

// replace

val = str.replace('Hello', 'Hi');

// includes()
val = str.includes('Hello')


console.log(val);
console.log(typeof val);

