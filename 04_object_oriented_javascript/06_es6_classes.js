class Person {
  constructor(firstName, LastName, dob) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.LastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.LastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const jamal = new Person('Jamal', 'Olakunle', 'March 20 1998');

jamal.getsMarried('Otokiti')
// console.log(jamal.calculateAge()); 
console.log(jamal);

console.log(Person.addNumbers(1,2));