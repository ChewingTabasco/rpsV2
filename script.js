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
        return `You win! ${playerSel} beats ${compSel}!`;
      } else {
        return `You lose. ${compSel} beats ${playerSel}.`;
      }
    }
  }
}

function game() {
  for (let i = 1; i < 6; i++) {
    console.log(playRound(prompt("Make your move:"), computerPlay()));
  }
}
