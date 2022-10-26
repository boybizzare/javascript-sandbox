const http = new EasyHTTP();

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Create user data
const data = {
  name: "Jamal Olakunle",
  username: "boybizarre",
  email: "boybizarre@gmail.com",
};

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/10")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
