let playerScore;
let computerScore;

function incrementPlayerScore() {
  playerScore += 1;
}

function incrementComputerScore() {
  computerScore += 1;
}

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const playerSel = playerSelection.toLowerCase();
  const compSel = computerSelection.toLowerCase();

  if (
    !(playerSel === "rock" || playerSel === "paper" || playerSel === "scissors")
  ) {
    return `${playerSelection} is not a valid choice.`;
  } else {
    if (playerSel === compSel) {
      return `Tie game. You both played ${playerSel}.`;
    } else {
      if (
        (playerSel === "rock" && compSel === "scissors") ||
        (playerSel === "paper" && compSel === "rock") ||
        (playerSel === "scissors" && compSel === "paper")
      ) {
        incrementPlayerScore();
        console.log(playerScore);
        return `You win! ${playerSel} beats ${compSel}!`;
      } else {
        incrementComputerScore();
        console.log(computerScore);
        return `You lose. ${compSel} beats ${playerSel}.`;
      }
    }
  }
}

function getWinner() {
  return playerScore > computerScore ? `You Win!` : `You lose.`;
}

function game() {
  playerScore = 0;
  computerScore = 0;

  for (let i = 1; i < 6; i++) {
    console.log(playRound(prompt("Make your move:"), computerPlay()));
  }

  console.log(`
  Your score: ${playerScore}
  Computer score: ${computerScore}
  ${getWinner()}`);
}
