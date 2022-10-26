// const brad = {
//   name: 'Brad',
//   age: 30
// }

// console.log(brad);

// console.log(brad.age);



// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);

  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  console.log(this);
}

// console.log(this);
// const jamal = new Person('Jamal', 24);
// const olakunle = new Person('Olakunle', 25);

// console.log(olakunle.age);

const jamal = new Person('Jamal', '03-20-1998')

console.log(jamal.calculateAge());