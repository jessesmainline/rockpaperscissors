// Initialize the score counters
let playerWins = 0;
let computerWins = 0;

// Event listeners for rock, paper, or scissors button press
const buttons = document.querySelectorAll('.choiceButton');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);
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
    gameResult.innerHTML += "<ul>You chose <strong>" + playerChoice + "</strong>. Computer chose <strong>" + computerChoice + "</strong>. " + result + "</ul>";

    // Update the score display
    const score = document.getElementById("scoreboard");
    score.innerHTML = "Player: " + playerWins + " | Computer: " + computerWins;

    // Check if the game is over (five rounds)
    if (playerWins === 5 || computerWins === 5) {
        // Update the final score display
        const score = document.getElementById("scoreboard");
        score.innerHTML = "Player: " + playerWins + " | Computer: " + computerWins;
        // Reset the score counters
        playerWins = 0;
        computerWins = 0;
        // Enable the buttons
        buttons.forEach((button) => {
            button.disabled = false;
        });
        // Clear the result display
        gameResult.innerHTML = "";
    }
}
