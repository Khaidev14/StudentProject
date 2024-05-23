const submitBtn = document.querySelector('.submit-button');

submitBtn.addEventListener("click", ()=>{

  const displayNumber = document.getElementById('displayDiceNum');
  const displayImage = document.getElementById('displayDiceImg');

  const input = document.getElementById('inputField');
  const inputValue = input.value;
  let diceArray = [];
  let imgArray = [];

  for(i=0; i<inputValue; i++){
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceArray.push(randomNumber);
    imgArray.push(`<img src="pictures/${randomNumber}.png">`);
  }

  displayNumber.textContent = `Dice rolled output: ${diceArray.join(", ")}`
  displayImage.innerHTML = imgArray.join('');

})