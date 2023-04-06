Rock Paper Scissors
or RPS, rps.


A noob's first javascript program for The Odin Project, a 75% milestone of the Foundation's course.

I'm tasked with writing a rock, paper, scissor program that simulates the game normally played between two people using their hands. 

To play the game, each player says aloud "rock, paper, scissors," and upon saying the last word, reveals their choice of tool: a handsign that uses their hand to make the shape of one of the options: rock, paper, or scissors. Paper beats Rock, Scissors beats Paper, and Rock beats Scissors. If two players play the same hand, it's a tie and the game is played again until one person beats the other. Each win is a point, and the first person to win two out of three untied-matches wins, for example. 



Coding plan (psuedo code):

Following the instructions at https://www.theodinproject.com/lessons/foundations-rock-paper-scissors .


PROMPT player choice with case insensitive input of Rock, Paper, and Scissors. Player also need not spell entire word.
    let choice = prompt, string.

A function getComputerChoice generates one of the three options.

Another function evaluates whether the player wins,looses, or ties, based on the given inputs, playerChoice and computerChoice.

The function prints the result, whether the player wins, loses, or ties.
