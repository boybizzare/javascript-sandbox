function greet(firstName = 'Jamal', lastName = 'Olakunle'){
  // if(firstName = 'undefined'){firstName = 'Jamal'}
  // if(lastName = 'undefined'){lastName = 'Olakunle'}
  // console.log('Hello there');
  return 'Hello' + ', ' + firstName + ' ' + lastName
}


const square = function(x = 3){
  return x**3
};
// console.log(square());

// Immediately Invokable Function Expressions - IIFEs

(function(name){
console.log('Hello ' + name);
})('Jamal');

const todo   = {
  add: function(){
    console.log('Add todo');
  },
  edit: function(id){
    console.log(`Add todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();