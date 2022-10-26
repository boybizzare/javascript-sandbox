const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const jamal = Object.create(personPrototypes, {
  firstName: { value: 'Jamal' },
  lastName: { value: 'Olakunle' },
  age: { value: 24 }
});

console.log(jamal);
console.log(jamal.greeting());