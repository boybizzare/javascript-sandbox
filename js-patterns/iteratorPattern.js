// allows you to loop over a collection of objects


const items = [1, 'dev sage', false, 2.45];

class Iterator {
  constructor() {
    this.items = items;
    this.index = 0;
  }

  hasNext = () => {
    return this.index < this.items.length;
  };
  next = () => {
    return this.items[this.index++];
  };
}

const iterator = new Iterator(items);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.hasNext());
