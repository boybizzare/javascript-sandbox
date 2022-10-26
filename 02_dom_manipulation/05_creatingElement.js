// Create ELement
const li = document.createElement('li');

// Add class
li.className = 'collection-item'

// Add id 

li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Cretae text node and append
li.appendChild(document.createTextNode('Hello Jamal'));

// Create new link element
const link = document.createElement('a');

// Add class
link.className = "delete-item secondary-content";

// Add attribute
link.setAttribute('href', '#');

// Add icon
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(link);