// Basic structure for modules

// (function () {
//   // declare private variables and functions
//   return {
//     // declare public variables and functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function () {
//   let text = 'Hello World!';

//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   };

//   return {
//     callChangeText : function () {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// UICtrl.changeText();


// console.log(UICtrl.text);



// REVEALING MODULE PATTERN

const itemCtrl = (() => {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return _data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
}
})();

itemCtrl.add({ id: 1, name: 'Jamal' });
itemCtrl.add({ id: 2, name: 'Oluwole' });
itemCtrl.add({ id: 3, name: 'Wisdom' });

console.log(itemCtrl.get(2));

