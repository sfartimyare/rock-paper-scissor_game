'use strict';

const options = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
  const roll = options[Math.trunc(Math.random() * options.length)];
  return roll;
}
getComputerChoice();

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'tie';
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissor') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissor' && computerSelection == 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);

  if (result == 'tie') {
    console.log(`ITS A TIE!`);
  } else if (result == 'player') {
    console.log(`player wins: ${playerSelection} vs ${computerSelection}`);
  } else if (result == 'computer') {
    console.log(`computer wins: ${computerSelection} vs ${playerSelection}`);
  }
}

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();

function game() {
  console.log(`WELCOME!!`);
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(`rock paper OR scissor`);
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}

game();
// console.log(game);
// console.log(playRound(playerSelection, computerSelection));
