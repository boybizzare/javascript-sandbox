// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('CLICKED');
  
//   e.preventDefault();
// })

document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e) {
  // console.log('Jamal just Clicked it');
  e.preventDefault();

  let val;

  val = e;
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event Type
  val = e.type;

  // Time Stamp
  val = e.timeStamp;
  
  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;


  console.log(val);

}