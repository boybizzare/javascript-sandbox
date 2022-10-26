// EVENT BUBBLING

// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("Card Title");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("Card Content");
// });

// document.querySelector(".card").addEventListener("click", function () {
//   console.log("CARD");
// });

// document.querySelector(".col").addEventListener("click", function () {
//   console.log("COL");
// });

// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  // console.log('DELETE ITEM');
  
  // }
  // console.log(e.target);

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('DELETE ITEM JAMAL');
    e.target.parentElement.parentElement.remove();
  }
}

