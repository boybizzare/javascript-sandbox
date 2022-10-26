// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() { }

// Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');

  //Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;
  
  list.appendChild(row);

}

// Show alert
UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement('div');
  // Add class
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');

  // Insert before
  container.insertBefore(div, form);

  // Time Out after 3secs
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);


}

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}

// Remove book from list
UI.prototype.removeBookFromList = function (target) {
  if (target.className === 'delete') {
    if (confirm('Are You Sure?')) {
      target.parentElement.parentElement.remove();
    }
  }
}



// Event listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  // console.log('test');

  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instatntiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (title === ''|| author ==='' ||isbn ==='') {
    // Error Alert
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add book to list
    ui.addBookToList(book)

    // Show success
    ui.showAlert('Book Added', 'success')

    // Clear fields
    ui.clearFields();

    console.log(ui);
  }


  e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.removeBookFromList(e.target);

  // Show Message
  ui.showAlert('Book Deleted', 'success');

  e.preventDefault();
})