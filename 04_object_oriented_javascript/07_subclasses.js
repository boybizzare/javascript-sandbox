class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const jamal = new Customer('Jamal', 'Olakunle', '081-2891-0425', 'Standard');

console.log(jamal);
console.log(jamal.greeting());
console.log(Customer.getMembershipCost());