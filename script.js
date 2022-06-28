let playerScore = 0;
let computerScore = 0;

const selectionBtns = document.querySelectorAll(".selection-btn");
const gameDisplay = document.querySelector("#game-display");

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
  if (playerSelection === computerSelection) {
    return `Tie game. You both played ${computerSelection}.
    ${getScores()}`;
  } else {
    if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      incrementPlayerScore();
      if (checkIfRoundLimitReached()) {
        let endReturnValue = getEndGameText();
        resetScores();
        return endReturnValue;
      }
      return `You win! ${playerSelection} beats ${computerSelection}! ${getScores()}`;
    } else {
      incrementComputerScore();
      if (checkIfRoundLimitReached()) {
        let endReturnValue = getEndGameText();
        resetScores();
        return endReturnValue;
      }
      return `You lose. ${computerSelection} beats ${playerSelection}. ${getScores()}`;
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

function checkIfRoundLimitReached() {
  if (playerScore == 5 || computerScore == 5) return true;
  return false;
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

function getEndGameText() {
  return `Your score: ${playerScore}
  Computer score: ${computerScore}
  ${getWinner()}`;
}

selectionBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    gameDisplay.textContent = `${playRound(e.target.id, computerPlay())}`;
  })
);
