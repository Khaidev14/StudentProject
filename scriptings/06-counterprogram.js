const numberDisplay = document.getElementById("score");
const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const increaseButton = document.getElementById("increaseBtn");

let count = 0;

decreaseButton.onclick = function(){
  count--;
  numberDisplay.textContent = count;
}
increaseButton.onclick = function(){
  count++;
  numberDisplay.textContent = count;
}

resetButton.onclick = function(){
  count = 0;
  numberDisplay.textContent = count;
}