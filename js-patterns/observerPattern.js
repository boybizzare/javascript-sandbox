// function Subject() {
//   this.observers = []; // array of observer functions
// }

// Subject.prototype = {
//   subscribe: (fn) => {
//     this.observers.push(fn);
//   },

//   unsubscribe: (fnToRemove) => {
//     this.observers.filter((fn) => {
//       if (fn !== fnToRemove) return fn;
//     });
//   },

//   fire: () => {
//     this.observers.forEach((fn) => {
//       fn.call();
//     });
//   },
// };

// one to many: one object(subject) to many objects (obsevers)

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fnToRemove) {
    this.observers.splice(this.observers.indexOf(fnToRemove)); // not very effective but works for now
    // this.observers.filter((fn) => {
    //   if (fn == fnToRemove) return fn;
    // });
  }

  fire() {
    this.observers.forEach((fn) => fn.call());
  }
}

const subject = new Subject();

function observer1() {
  console.log('This is the first observer');
}

function observer2() {
  console.log('This is the second observer');
}

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unsubscribe(observer2);

console.log(subject.observers);

subject.fire();
