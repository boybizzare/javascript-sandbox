// creational patterns, structural patterns, behavioural patterns




class Developer {
  constructor(name) {
    this.name = name;
    this.type = 'Developer';
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = 'Tester';
  }
}
class EmployeeFactory {
  constructor() {
    this.create = (name, type) => {
      switch (type) {
        case 1:
          return new Developer(name);
          break;
        case 2:
          return new Tester(name);
          break;
      }
    };
  }
}

function sayHi() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create('Patrick', 1));
employees.push(employeeFactory.create('Fred', 2));
employees.push(employeeFactory.create('Harvey', 2));
employees.push(employeeFactory.create('Ashley', 1));

employees.forEach((emp) => {
  sayHi.call(emp);
});
