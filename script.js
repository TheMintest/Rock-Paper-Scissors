//génération des variables de choix
const rock = 100 / 3;
const paper = rock * 2;
const scissors = rock * 3

function computerChoice() {
    // Génération de la variable du choix de l'ordinateur pour le tour 
    let i = Math.random() * 100;
    console.log(`valeur de i = ${i}`);
    if (i <= rock) {
        return "rock";
    } else if (i <= paper) {
        return "paper";
    } else {
        return "scissors";
    }
}


const playerWin = "You win  !";
const playerLoose = "You loose this time";
const draw = "Draw"
let result = "";

function playRound() {
    // définition du choix de l'utilisateur et de celui de l'ordinateur.
    let playerSelection = prompt("Rock, paper or scissors ?").toLowerCase();
    let computeurSelection = computerChoice();
    console.log(`player choice is ${playerSelection}, computer choice is ${computeurSelection}`);

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        if ((computeurSelection === "rock") && (playerSelection === "paper")) {
            console.log("Player Win this round")
            return playerWin;
        } else if ((computeurSelection === "rock") && (playerSelection === "scissors")) {
            console.log("player loose this round")
            return playerLoose;
        } else if ((computeurSelection === "paper") && (playerSelection === "scissors")) {
            console.log("Player Win this round")
            return playerWin;
        } else if ((computeurSelection === "paper") && (playerSelection === "rock")) {
            console.log("player loose this round")
            return playerLoose;
        } else if ((computeurSelection === "scissors") && (playerSelection === "paper")) {
            console.log("player loose this round")
            return playerLoose;
        } else if ((computeurSelection === "scissors") && (playerSelection === "rock")) {
            console.log("Player Win this round")
            return playerWin;
        } else {
            return draw;
        }
    } else {
        alert("Please enter a correct value");
    }
}

function game(numberOfRound) {
    let loss = 0;
    let win = 0;
    let tie = 0;

    for (let currentRound = 0; currentRound <= numberOfRound; currentRound++) {
        if (numberOfRound = NaN) {
            alert("please enter a valid number");
        } else {
            playRound();
        }

        if (playRound === playerWin) {
            win = win + 1;
        } else if (playRound === playerLoose) {
            loss = loss + 1;
        } else {
            tie = tie + 1;
        }

        console.log(`win : ${win}, loss : ${loss}, draw : ${tie}.`)
    }

    if (loss < win) {
        console.log(`${win} VS ${loss}, You loose.`)
    } else if (loss > win) {
        console.log(`${win} VS ${loss}, You win !.`)
    } else {
        console.log(`${win} VS ${loss}, tie !`)
    }
}


numberOfRound = prompt("Enter the number of round you want to play.")
game(numberOfRound);