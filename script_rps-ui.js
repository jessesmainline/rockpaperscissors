// Initialize the score counters
let playerWins = 0;
let computerWins = 0;

// Event listeners for rock, paper, or scissors button press
const buttons = document.querySelectorAll('.choiceButton');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playGame(button.id);
    console.log(button.id);
  });
});

// Function to handle player's choice and initiate game
function playGame(playerChoice) {
  // Generate computer's choice
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    playerWins++;
  } else {
    result = "Computer wins!";
    computerWins++;
  }

  // Update the result display
  const gameResult = document.getElementById("gameResult");
  gameResult.innerHTML += "<li>You chose <strong>" + playerChoice + "</strong>. Computer chose <strong>" + computerChoice + "</strong>. " + result + "</li>";

  // Update the score display
  updateScoreboard();

  // Check for game over condition
  if (playerWins === 5 || computerWins === 5) {
    // Display the game result
    let gameResultMessage;
    if (playerWins === 5) {
      gameResultMessage = "Congratulations! You win the game!";
    } else {
      gameResultMessage = "Computer wins the game!";
    }

    // Show the pop-up
    showGameResult(gameResultMessage);
  }
}

// Function to update the scoreboard
function updateScoreboard() {
  const score = document.getElementById("scoreboard");
  score.innerHTML = "Player: " + playerWins + " | Computer: " + computerWins;
}

// Function to show the pop-up with game result
function showGameResult(message) {
  const popupContainer = document.getElementById("popupContainer");
  const popupMessage = document.getElementById("popupMessage");

  // Update the pop-up message
  popupMessage.textContent = message;

  // Show the pop-up
  popupContainer.style.display = "block";

  // Disable the buttons for a new game
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

// Function to handle the "Play Again" button click
function playAgain() {
  // Hide the pop-up
  const popupContainer = document.getElementById("popupContainer");
  popupContainer.style.display = "none";

  // Reset the game
  playerWins = 0;
  computerWins = 0;
  gameResult.innerHTML = "";
  updateScoreboard();

  // Enable the buttons for a new game
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

// Add event listener to "Play Again" button
document.getElementById("playAgainButton").addEventListener("click", playAgain);
