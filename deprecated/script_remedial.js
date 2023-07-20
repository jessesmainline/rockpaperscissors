
// Function to start the game
function startGame() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let roundsPlayed = 0;


    //Prompt player choice with keyboard.
    function getPlayer() {
    let playerHand = prompt("Choose your hand by typing either Rock, Paper, or Scissors!");
    playerHand = playerHand ? playerHand.toLowerCase().charAt(0) : null;
    return playerHand;
    }


    // Randomly generate the number 1, 2, or 3 to represent opponent's hand. 
    function getComputerChoice() {
    let min = 1;
    let max = 3;
    let compHand = Math.floor(Math.random() * (max - min + 1)) + min;
    return compHand;    
    }

    // Determine winner, loser, or tie based on arguments from prompt (playerHand) and program (compHand).
    function playRound() {
    let playerHand = getPlayer();
    if (playerHand !== "r" && playerHand !== "p" && playerHand !== "s") {
        confirm("Type Rock, Paper, or Scissors.");
    }
    else if (playerHand !== null) {
        let compHand = getComputerChoice();
        let result = "";
        switch (compHand) {
        case 1: //rock
            if (playerHand === "r") {
            result = "Tie! Opponent also chose Rock.";
            ties++;
            roundsPlayed--;
            } else if (playerHand === "p") {
            result = "You win! Opponent chose Rock and you chose Paper.";
            playerWins++;
            } else if (playerHand === "s") {
            result = "You lose! Opponent chose Rock and you chose Scissors.";
            computerWins++;
            }
            break;
        case 2: //paper
            if (playerHand === "r") {
            result = "You lose! Opponent chose Paper and you chose Rock.";
            computerWins++;
            } else if (playerHand === "p") {
            result = "Tie! Opponent also chose Paper.";
            ties++;
            roundsPlayed--;
            } else if (playerHand === "s") {
            result = "You win! Opponent chose Paper and you chose Scissors.";
            playerWins++;
            }
            break;
        case 3: //scissors
            if (playerHand === "r") {
            result = "You win! Opponent chose Scissors and you chose Rock.";
            playerWins++;
            } else if (playerHand === "p") {
            result = "You lose! Opponent chose Scissors and you chose Paper.";
            computerWins++;
            } else if (playerHand === "s") {
            result = "Tie! Opponent also chose Scissors.";
            ties++;
            roundsPlayed--;
            }
            break;
        default:
            result = "Try that again...";
            break;
        }
        roundsPlayed++;
        alert(result);
    }
    }


    // Run the game until the player has played 5 times.
    while (roundsPlayed < 5) {
    playRound();
    }

    // Show the results of the game.
    alert(`Game Over! You won ${playerWins} time(s), lost ${computerWins} time(s), and tied ${ties} time(s).`);
}

// Add event listener to "Play" button
document.getElementById("play").addEventListener("click", startGame);

/*


//Auto attempt v03

let playerScore = 0;
let compScore = 0;

// Function to start the game
function startGame() {
  // Reset scores to zero
  playerScore = 0;
  compScore = 0;

  // Run game 5 times
  for (let i = 0; i < 5; i++) {
    let playerHand;
    let compHand;

    // Prompt player choice
    playerHand = prompt("Choose your hand by typing either Rock, Paper, or Scissors!");

    // Convert player answer to integer: Rock = 1, Paper = 2, Scissor = 3, for comparison to compHand.
    switch (playerHand.toLowerCase().charAt(0)) {
      case "r": //rock
        playerHand = 1;
        break;
      case "p": //paper
        playerHand = 2;
        break;
      case "s": //scissors
        playerHand = 3;
        break;
    }

    // Randomly generate computer choice
    compHand = Math.floor(Math.random() * 3) + 1;

    // Determine winner, loser, or tie based on player and computer choices
    if (playerHand === compHand) {
      alert("Tie! Try again.");
    } else if (
      (playerHand === 1 && compHand === 3) ||
      (playerHand === 2 && compHand === 1) ||
      (playerHand === 3 && compHand === 2)
    ) {
      playerScore++;
      alert("You win!");
    } else {
      compScore++;
      alert("You lose!");
    }
  }

  // Determine final winner
  if (playerScore > compScore) {
    alert(`You win ${playerScore} to ${compScore}!`);
  } else if (compScore > playerScore) {
    alert(`You lose ${compScore} to ${playerScore}!`);
  } else {
    alert(`Tie game with a score of ${playerScore} to ${compScore}!`);
  }
}

// Add event listener to "Play" button
document.getElementById("play").addEventListener("click", startGame);



//Auto attempt v02
let playerHand;
let compHand;

function getPlayer() {
    playerHand = prompt("Choose your hand by typing either Rock, Paper, or Scissors!");
    console.log(playerHand);
    playerHand = playerHand.toLowerCase();
    console.log(playerHand);

    switch (playerHand) {
        case "rock":
            playerHand = 1;
            break;
        case "paper":
            playerHand = 2;
            break;
        case "scissors":
            playerHand = 3;
            break;
        default:
            alert("Invalid input. Try again.");
            getPlayer();
            break;
    }
    console.log(playerHand);
}

function getComputerChoice() {
    let min = 1;
    let max = 3;

    compHand = Math.floor(Math.random() * (max - min + 1)) + min;
    return compHand;
}

function playGame() {
    getPlayer();
    getComputerChoice();
    console.log(playerHand);
    console.log(compHand);

    switch (compHand) {
        case 1:
            if (playerHand === 1) {
                alert("You chose rock. Opponent also chose rock. Tie! Try again.");
            } else if (playerHand === 2) {
                alert("You chose paper. Opponent chose rock. You lose!");
            } else if (playerHand === 3) {
                alert("You chose scissors. Opponent chose rock. You win!");
            }
            break;
        case 2:
            if (playerHand === 1) {
                alert("You chose rock. Opponent chose paper. You lose!");
            } else if (playerHand === 2) {
                alert("You chose paper. Opponent also chose paper. Tie! Try again.");
            } else if (playerHand === 3) {
                alert("You chose scissors. Opponent chose paper. You win!");
            }
            break;
        case 3:
            if (playerHand === 1) {
                alert("You chose rock. Opponent chose scissors. You win!");
            } else if (playerHand === 2) {
                alert("You chose paper. Opponent chose scissors. You lose!");
            } else if (playerHand === 3) {
                alert("You chose scissors. Opponent also chose scissors. Tie! Try again.");
            }
            break;
    }
}

playGame();




// Original attempt v01. 

//Prompt player decision. Initiate with a click button "Play".

let playerHand;
let compHand;

function getPlayer(playerHand) { //Prompt player choice.
    playerHand = prompt("Choose your hand by typing either Rock, Paper, or Scissors!" , compHand); //Default "compHand" results in tie hand.
    console.log(playerHand);
    playerHand = playerHand.toLowerCase().charAt(0);
    console.log(playerHand);

    //  Convert player answer to integer: Rock = 1, Paper = 2, Scissor = 3, for comparison to compHand.
    switch (playerHand) {
        case "r": //rock
            playerHand = 1;
            break;
        case "p": //paper
            playerHand = 2;
            break;
        case "s": //scissors
            playerHand = 3;
            break;
    }
    console.log(playerHand);
}


// Randomly generate the number 1, 2, or 3 to represent opponent's hand. 
function getComputerChoice(compHand){
    let min = 1;
    let max = 3;

    compHand = Math.floor(Math.random() * (max - min + 1)) + min;
    return compHand;    
}

if (playerHand != null) {
    getComputerChoice();
    console.log(playerHand);
    console.log(compHand);


    // Determine winner, loser, or tie based on arguments from prompt (playerHand) and program (compHand).

    switch (getComputerChoice) {
        case 1: //rock
            if (playerHand === 1) {
                alert("Opponent also chose rock. Tie! Try again.")
            }
            else if (playerHand = 2) {
                alert("Opponent chose rock. You lose!")
            }
            else if (playerHand = 3) {
                alert("Opponent chose rock. You win!")
            }
            else {
                alert("Try that again...")
            }

        case 2:  //paper
            if (playerHand = 1) {
                alert("Opponent chose paper. You lose!")
            }
            else if (playerHand = 2) {
                alert("Opponent also chose paper. Tie! Try again.")
            }
            else if (playerHand = 3) {
                alert("Opponent chose paper. You win!")
            }
            else {
                alert("Try that again...")
            }

        
        case 3: //scissors
            if (playerHand = 1) {
                alert("Opponent chose scissors. You win!")
            }
            else if (playerHand = 2) {
                alert("Opponent chose scissors. You lose!")
            }
            else if (playerHand = 3) {
                alert("Opponent also chose Scissors. Tie! Try agian.")
            }
            else {
                alert("Try that again...")
            }
    }
}
*/