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

  if (playerSel === compSel) {
    return `Tie game. You both played ${playerSel}.
    ${getScores()}`;
  } else {
    if (
      (playerSel === "rock" && compSel === "scissors") ||
      (playerSel === "paper" && compSel === "rock") ||
      (playerSel === "scissors" && compSel === "paper")
    ) {
      incrementPlayerScore();
      return `You win! ${playerSel} beats ${compSel}!
      ${getScores()}`;
    } else {
      incrementComputerScore();
      return `You lose. ${compSel} beats ${playerSel}.
      ${getScores()}`;
    }
  }
}

function getWinner() {
  if (!(playerScore === computerScore)) {
    return playerScore > computerScore ? `You Win!` : `You lose.`;
  } else {
    return `Tie Game.`;
  }
}

function getScores() {
  return `Score: ${playerScore} | ${computerScore}`;
}

function getPlayerSelection(roundNumber) {
  let selection = prompt(`
  Round ${roundNumber} of 5
  Make your move:
  -rock
  -paper
  -scissors`);

  if (
    !(selection === "rock" || selection === "paper" || selection === "scissors")
  ) {
    console.log(`${selection} is not a valid choice.`);
    return getPlayerSelection(roundNumber);
  } else {
    return selection;
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;

  for (let i = 1; i < 6; i++) {
    console.log(playRound(getPlayerSelection(i), computerPlay()));
  }

  console.log(`
  Your score: ${playerScore}
  Computer score: ${computerScore}
  ${getWinner()}`);
}
