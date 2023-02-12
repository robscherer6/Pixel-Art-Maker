// Select color input
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');

let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
makeGrid(height, width);

sizePicker.addEventListener('click', (e) => {

  e.preventDefault();


  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  table.firstElementChild.remove();

  makeGrid(height, width);
});
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  console.log(height.value, width.value);
  let row = table.insertRow(0);
  let cell = row.insertCell(0);

for (let i = 0; i <= height; i++) {
  let row = table.insertRow(i);
  for (let j = 0; j <= width; j++) {
    let cell = row.insertCell(j);
    cell.addEventListener('click', (e) =>{
      cell.style.backgroundcolor = color.value;
    });
  }
}
// Your code goes here!

}
