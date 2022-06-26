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
  const compSel = computerSelection.toLowerCase();

  // Skip round if prompt is canceled
  if (playerSelection === undefined) {
    return;
  }

  if (playerSelection === compSel) {
    return `Tie game. You both played ${computerSelection}.
    ${getScores()}`;
  } else {
    if (
      (playerSelection === "rock" && compSel === "scissors") ||
      (playerSelection === "paper" && compSel === "rock") ||
      (playerSelection === "scissors" && compSel === "paper")
    ) {
      incrementPlayerScore();
      return `You win! ${firstLetterUpper(
        playerSelection
      )} beats ${computerSelection}!
      ${getScores()}`;
    } else {
      incrementComputerScore();
      return `You lose. ${computerSelection} beats ${firstLetterUpper(
        playerSelection
      )}.
      ${getScores()}`;
    }
  }
}

// function getWinner() {
//   if (!(playerScore === computerScore)) {
//     return playerScore > computerScore ? `You Win!` : `You lose.`;
//   } else {
//     return `Tie Game.`;
//   }
// }

function getScores() {
  return `Score: ${playerScore} | ${computerScore}`;
}

function firstLetterUpper(string) {
  const firstLetter = string.substr(0, 1);
  const restOfString = string.substr(1);
  const newStr = firstLetter.toUpperCase() + restOfString;
  return newStr;
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
