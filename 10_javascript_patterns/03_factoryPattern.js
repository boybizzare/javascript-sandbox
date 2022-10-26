function memberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new simpleMembership(name);
    } else if (type === 'standard') {
      member = new standardMembership(name);
    } else if (type === 'super') {
      member = new superMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
    
  }
}

const simpleMembership = function (name) {
  this.name = name;
  this.cost = '$5';
}
const standardMembership = function (name) {
  this.name = name;
  this.cost = '$15';
}
const superMembership = function (name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new memberFactory();

members.push(factory.createMember('Jamal Olakunle', 'simple'));
members.push(factory.createMember('Oluwole Safiu', 'super'));
members.push(factory.createMember('Emelda Omonor', 'simple'));
members.push(factory.createMember('Festus Wisdom', 'standard'));

// console.log(members);

members.forEach(member => {
  member.define();
});

