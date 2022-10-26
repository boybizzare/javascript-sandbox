// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// Add text node
const newText = document.createTextNode('Task List');
newHeading.appendChild(newText);

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');


// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add('jamal-class');
link.classList.remove('jamal-class');

val = link;

// Attributes
val = link.hasAttribute('href');
val = link.getAttribute('href');
val = link.setAttribute('title', 'Way to google');
val = link.setAttribute('href', 'https://www.google.com');
val = link.removeAttribute('title');




console.log(val);