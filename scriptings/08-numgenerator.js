const display = document.getElementById('display');
const myButton = document.getElementById('myButton');
const min = 1;
const max = 100;

myButton.onclick = function(){
  const randomNumber = Math.floor(Math.random() * max) + min;
  display.textContent = randomNumber;
}