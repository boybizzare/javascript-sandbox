// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// console.log(items[0]);
// items[0].style.color = 'green';
// items[3].textContent = 'Hi, Jamal';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// let lis = document.getElementsByTagName('li');
// console.log(lis);

// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[0].textContent = 'I am an Array';

// lis = Array.from(lis);
// // lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });


// console.log(lis);

// document>querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

items.forEach(function (item, index) {
  item.textContent = `${index}: Jamal`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
  li.style.background = '#ccc';
})

for (let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);