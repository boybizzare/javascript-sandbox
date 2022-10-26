// document.getElementById()

// console.log(document.getElementById('task-title'));

// Get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // change styling

// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '20px';
// // taskTitle.style.display = 'none';

// taskTitle.textContent = 'Task Lists';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:green">Task List</span>';

// document.querySelector()


console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));


document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue'
document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(2)').style.color = 'red';
document.querySelector('li:nth-child(4)').style.color = 'pink'
document.querySelector('li:nth-child(4)').style.background = 'grey';
document.querySelector('li:nth-child(2)').style.fontSize = '1rem';
// document.querySelector('li:nth-child(odd)').style.color = 

