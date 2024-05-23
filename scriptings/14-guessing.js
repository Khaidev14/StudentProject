const generateBtn = document.getElementById('generateButton');
const submitBtn = document.getElementById('submitBtn');
const minNum = 1;
const maxNum = 50;

generateBtn.onclick = function(){
  generateBtn.classList.remove('generateBtn');
  generateBtn.classList.add('hideElement');
  submitBtn.classList.remove('submitButton');
  submitBtn.classList.add('showElement');
  const secretAnswer = Math.floor(Math.random() * (maxNum - minNum + 1) + 1);
  console.log(secretAnswer)



  submitBtn.onclick = function(){
    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.classList.remove('hideElement');
    resultDisplay.classList.add('result');
    let chosenNum = document.getElementById('chosenNum');
    console.log()
    
    if(chosenNum.value == ''){
      resultDisplay.textContent = `Please enter a valid number!`;
    }
    else{
      if(chosenNum.value > secretAnswer){
        resultDisplay.textContent = `Guess is higher than the secret number!😂`;
      }
      else if(chosenNum.value < secretAnswer){
        resultDisplay.textContent = `Guess is lower than the secret number!😋`;
      }
      else{
        resultDisplay.textContent = `Congratulations, you guessed it! The number is ${secretAnswer}`;
      }
    }
  }
}

