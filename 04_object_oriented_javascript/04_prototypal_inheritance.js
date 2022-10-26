// Person constructor
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there, ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Jamal', 'Olakunle', 24);
console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, age, phone, membership) {
  Person.call(this, firstName, lastName, age);

  this.phone = phone;
  this.membrship = membership;
}

// Inherit the person prototype method
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('David', 'Adeleke', 30, '081-2891-0425', 'Standard');

console.log(customer1);

Customer.prototype.greeting = function () {
  return `Hello there, ${this.firstName} ${this.lastName} welcome to our company`;
}
console.log(customer1.greeting());