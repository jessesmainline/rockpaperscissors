// Initialize the score counters
var playerWins = 0;
var computerWins = 0;

// Event listeners for rock, paper, or scissors button press
const button = document.querySelectorAll('.choiceButton');
button.forEach((choiceButton) => {
button.addEventListener('click', (playGame(button.id)));
});

// Function to handle player's choice and initiate game
function playGame(playerChoice) {
    // Generate computer's choice
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Animate player and computer choices
    animateChoices(playerChoice, computerChoice);

    // Determine the winner
    var result;
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
    var gameResult = document.getElementById("gameResult");
    gameResult.innerHTML += "<li>You chose <strong>" + playerChoice + "</strong>. Computer chose <strong>" + computerChoice + "</strong>. " + result + "</li>";

    // Update the score display
    var score = document.getElementById("score");
    score.innerHTML = "Player: " + playerWins + " | Computer: " + computerWins;

    // Check if the game is over (five rounds)
    if (gameResult.getElementsByTagName("li").length === 5) {
        var buttons = document.getElementsByClassName("choiceButton");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true; // Disable the buttons after five rounds
        }
        gameResult.innerHTML += "<li><strong>Game Over!</strong></li>";
    }
}

// Function to animate player and computer choices
function animateChoices(playerChoice, computerChoice) {
    var playerAnimation = document.getElementById("playerChoiceAnimation");
    var computerAnimation = document.getElementById("computerChoiceAnimation");

    playerAnimation.innerHTML = "<img src='" + playerChoice + ".png' alt='" + playerChoice + "'>";
    computerAnimation.innerHTML = "<img src='" + computerChoice + ".png' alt='" + computerChoice + "'>";

    playerAnimation.style.opacity = 1;
    computerAnimation.style.opacity = 1;

    setTimeout(function() {
        playerAnimation.style.transform = "translate(-50%, -50%) scale(0)";
        computerAnimation.style.transform = "translate(-50%, -50%) scale(0)";
    }, 100);

    setTimeout(function() {
        playerAnimation.style.opacity = 0;
        computerAnimation.style.opacity = 0;
    }, 600);
}
