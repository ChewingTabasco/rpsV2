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
  const compSel = computerSelection.toLowerCase();

  if (playerSelection === compSel) {
    return `Tie game. You both played ${playerSelection}.
    ${getScores()}`;
  } else {
    if (
      (playerSelection === "rock" && compSel === "scissors") ||
      (playerSelection === "paper" && compSel === "rock") ||
      (playerSelection === "scissors" && compSel === "paper")
    ) {
      incrementPlayerScore();
      return `You win! ${playerSelection} beats ${computerSelection}!
      ${getScores()}`;
    } else {
      incrementComputerScore();
      return `You lose. ${computerSelection} beats ${playerSelection}.
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

function firstLetterUpper(string) {
  const firstLetter = string.substr(0, 1);
  const restOfString = string.substr(1);
  const newStr = firstLetter.toUpperCase() + restOfString;
  return newStr;
}

function getPlayerSelection(roundNumber) {
  let selection = prompt(`
  Round ${roundNumber} of 5
  Make your move:
  -rock
  -paper
  -scissors`);

  const lowerSel = selection.toLowerCase();

  if (
    !(lowerSel === "rock" || lowerSel === "paper" || lowerSel === "scissors")
  ) {
    console.log(`${selection} is not a valid choice.`);
    return getPlayerSelection(roundNumber);
  } else {
    return lowerSel;
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
