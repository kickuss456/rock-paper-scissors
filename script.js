const getHumanChoice = document.getElementById('your-choice');
const getComputerChoice = document.getElementById('cpu-choice');
const resultDisplay = document.getElementById('result');
const allChoices = document.querySelectorAll('button');
const humanScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('cpu-score');
const tieScoreDisplay = document.getElementById('tie-score');
const newGameDisplay = document.getElementById('new-game');
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let yourChoice;
let computerChoice;
let result;

allChoices.forEach(allChoices => allChoices.addEventListener('click', (e) => {
  yourChoice = e.target.id;
  getHumanChoice.innerHTML = yourChoice;
  generateChoice()
  playRound()
}))

function generateChoice() {
  const randoNum = Math.floor(Math.random() * 3) + 1;
  
  if (randoNum === 1) {
    computerChoice = 'Rock';
  } else if (randoNum === 2) {
    computerChoice = 'Paper';
  } else if (randoNum === 3) {
    computerChoice = 'Scissors';
  }
  getComputerChoice.innerHTML = computerChoice;
}

function playRound() {
  if (yourChoice === computerChoice) {
    result = 'Its a Tie!';
    tieScore++;
    tieScoreDisplay.innerHTML = tieScore;
  } else if (yourChoice === 'Rock' && computerChoice === 'Paper') {
    result = 'You Win!'
    humanScore++;
    humanScoreDisplay.innerHTML = humanScore;
  } else if (yourChoice === 'Rock' && computerChoice === 'Scissors') {
    result = 'Computer Wins!'
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
  } else if (yourChoice === 'Paper' && computerChoice === 'Rock') {
    result = 'You Win!'
    humanScore++;
    humanScoreDisplay.innerHTML = humanScore;
  } else if (yourChoice === 'Paper' && computerChoice === 'Scissors') {
    result = 'Computer Wins!'
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
  } else if (yourChoice === 'Scissors' && computerChoice === 'Paper') {
    result = 'You Win!'
    humanScore++;
    humanScoreDisplay.innerHTML = humanScore;
  } else if (yourChoice === 'Scissors' && computerChoice === 'Rock') {
    result = 'Computer Wins!'
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
  }
  resultDisplay.innerHTML = result;

  if (humanScore === 5) {
    resultDisplay.textContent = "You have won the game!"
    document.getElementById('Rock').disabled = true;
    document.getElementById('Paper').disabled = true;
    document.getElementById('Scissors').disabled = true;
    setTimeout(resetGame, 3000);
  
  } else if (computerScore === 5) {
    resultDisplay.textContent = "You have loss the game!"
    document.getElementById('Rock').disabled = true;
    document.getElementById('Paper').disabled = true;
    document.getElementById('Scissors').disabled = true;
    setTimeout(resetGame, 3000);
  
  } else if (tieScore === 5) {
    resultDisplay.textContent = "Its a draw!"
    document.getElementById('Rock').disabled = true;
    document.getElementById('Paper').disabled = true;
    document.getElementById('Scissors').disabled = true;
    setTimeout(resetGame, 3000);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  tieScore = 0;
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  tieScoreDisplay.textContent = tieScore;

  newGameDisplay.textContent = 'New Game';
  getHumanChoice.textContent = '';
  getComputerChoice.textContent = '';
  resultDisplay.textContent = '';

  document.getElementById('Rock').disabled = false;
  document.getElementById('Paper').disabled = false;
  document.getElementById('Scissors').disabled = false;
}