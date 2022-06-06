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

  console.log(
    `your choice is: ${playerSel}, and the computer's choice is ${compSel}.`
  );

  if (
    !(playerSel === "rock" || playerSel === "paper" || playerSel === "scissors")
  ) {
    return `${playerSelection} is not a valid choice.`;
  }
}
