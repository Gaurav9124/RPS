console.log("hello");

const rps = ["ROCK", "PAPER", "SCISSOR"];

function computerChoice() {
  let index = Math.floor(Math.random() * 3);
  return rps.at(index);
}

function playerChoice() {
  let keepAsking = true;
  while (keepAsking) {
    let input = prompt("choose Rock, Paper or Scissor");
    if (
      input.toUpperCase() != "ROCK" &&
      input.toUpperCase() != "PAPER" &&
      input.toUpperCase() != "SCISSOR"
    ) {
      continue;
    } else {
      keepAsking = false;
      return input.toUpperCase();
    }
  }
}

function playRound() {
  let computer = computerChoice();
  let player = playerChoice();
  if (computer === player) {
    console.log("Round Draw");
    console.log(`\nYOUR CHOICE: ${player} \nCOMPUTER CHOICE: ${computer}`);
    return 0;
  } else if (
    (computer === "ROCK" && player === "SCISSOR") ||
    (computer === "PAPER" && player === "ROCK") ||
    (computer === "SCISSOR" && player === "PAPER")
  ) {
    console.log("You Loose :(");
    console.log(`\nYOUR CHOICE: ${player} \nCOMPUTER CHOICE: ${computer}`);
    return -1;
  } else {
    console.log("You Win!");
    console.log(`YOUR CHOICE: ${player} \nCOMPUTER CHOICE: ${computer}`);
    return 1;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;
  let roundResult;
  for (round; round <= 5; round++) {
    console.log("\n");
    console.log(
      `****************************ROUND ${round}********************************`
    );
    roundResult = playRound();
    if (roundResult == 1) {
      playerScore += 1;
    } else if (roundResult == -1) {
      computerScore += 1;
    }
  }
	console.log("********************************************************************")
	console.log("********************************************************************")
  console.log(
    `YOUR FINAL SCORE: ${playerScore} \nCOMPUTER FINAL SCORE: ${computerScore}`
  );
  if (playerScore === computerScore) {
    console.log("GAME DRAW");
  } else if (playerScore > computerScore) {
    console.log("YOU WON!!!");
  } else {
    console.log("YOU LOST :(");
  }
}
