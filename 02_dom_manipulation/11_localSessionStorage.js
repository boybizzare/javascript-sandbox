// Set local storage
// localStorage.setItem('name', 'Jamal');
// localStorage.setItem('age', '24')

// Set session storage
// sessionStorage.setItem('name', 'Bethany');

// Remove local storage
// localStorage.removeItem('name');

// Get from Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear storage
// localStorage.clear();


// console.log(name, age);


document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('TASK SAVED');

  console.log(tasks);


  e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task, index => { console.log(task); })