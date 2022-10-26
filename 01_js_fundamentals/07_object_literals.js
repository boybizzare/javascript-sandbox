const person = {
  firstName: 'Olakunle',
  lastName:  'Jamal',
  age: 24,
  email: 'animashaunjamal700@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2022 - this.age
  },
}

let val;

val = person;
// Getting specific values

val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.city
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people  = [
  {name: 'Heyjamal', age: 24},
  {name: 'Olu', age: 22}
];