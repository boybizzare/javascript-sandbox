// allows you to add or change operations and methods in an object without actually changing the object itself

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(sal) {
    this.salary = sal;
  }

  accept(visitorFunction) {
    visitorFunction(this);
  }
}

const devBoybizarre = new Employee('devBoybizarre', 10000);
console.log(devBoybizarre.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

devBoybizarre.accept(ExtraSalary);
console.log(devBoybizarre.getSalary());
