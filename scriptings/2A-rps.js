
let userEmoji = document.getElementById('user-choice');
let computerEmoji = document.getElementById('computer-choice');
let playerScore = 0;
let computerScore = 0;
let pscore = document.querySelector('.p-score');
let cscore = document.querySelector('.c-score');

function playGame(userChoice){
  let computerChoice = '';
  let result = '';
  const randomNum = Math.floor(Math.random() * 3) + 1;
  let resultDisplay = document.querySelector('.result-display');

  
  switch(randomNum){
    case 1: 
      computerChoice = 'rock';
      break;
    case 2: 
      computerChoice = 'paper';
      break;
    case 3: 
      computerChoice = 'scissors';
      break;
  }

  switch(userChoice){
    case 'rock':
      userEmoji.textContent = '👊';
      break;
    case 'paper':
      userEmoji.textContent = '🖐';
      break;
    case 'scissors':
      userEmoji.textContent = '✌';
      break;
  }
  
  switch(computerChoice){
    case 'rock':
      computerEmoji.textContent = '👊';
      break;
    case 'paper':
      computerEmoji.textContent = '🖐';
      break;
    case 'scissors':
      computerEmoji.textContent = '✌';
      break;
  }


  if(userChoice == computerChoice){
    resultDisplay.textContent = "It's a Tie!😂";
  }
  else{
    switch(userChoice){
      case 'rock':
        computerChoice == 'scissors' ? result = 'YOU WIN!😍' : result = 'YOU LOSE!😭';
        resultDisplay.textContent = result;
        break;
      
      case 'paper':
        computerChoice == 'rock' ? result = 'YOU WIN!😍' : result = 'YOU LOSE!😭';
        resultDisplay.textContent = result;
        break;
      
      case 'scissors':
        computerChoice == 'paper' ? result = 'YOU WIN!😍' : result = 'YOU LOSE!😭';
        resultDisplay.textContent = result;
        break;
    }
  }

  if(result == 'YOU WIN!😍'){
    playerScore++;
    pscore.textContent = playerScore;
    if(resultDisplay.classList.contains('c-score')){
      resultDisplay.classList.remove('c-score');
      resultDisplay.classList.add('p-score');
    }
    else{
      resultDisplay.classList.add('p-score');
    }
  }
  else if(result == 'YOU LOSE!😭'){
    computerScore++;
    cscore.textContent = computerScore
    if(resultDisplay.classList.contains('p-score')){
      resultDisplay.classList.remove('p-score');
      resultDisplay.classList.add('c-score');
    }
    else{
      resultDisplay.classList.add('c-score');
    }
  }
  else{
    if(resultDisplay.classList.contains('p-score')){
      resultDisplay.classList.remove('p-score');
    }
    else if(resultDisplay.classList.contains('c-score')){
      resultDisplay.classList.remove('c-score');
    }
  }
  console.log(resultDisplay.classList)
}