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
  //   if (playerScore === 5 || computerScore === 5) {
  //     let playerEndScore = playerScore;
  //     let compEndScore = computerScore;

  //     playerScore = 0;
  //     computerScore = 0;
  //     return `
  //  Your score: ${playerEndScore}
  //  Computer score: ${compScore}
  //  ${getWinner()}`;
  //   }

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
      return `You win! ${playerSelection} beats ${computerSelection}! ${getScores()}`;
    } else {
      incrementComputerScore();
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

//   console.log(`${gameMessage}

// Your score: ${playerScore}
// Computer score: ${computerScore}
// ${getWinner()}`);

selectionBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    // console.log(playRound(e.target.id, computerPlay()));
    gameDisplay.textContent = `${playRound(e.target.id, computerPlay())}`;
  })
);
