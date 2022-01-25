//génération des variables de choix
const rock = 100 / 3;
const paper = rock * 2;
const scissors = rock * 3

function computerPlay() {
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

// définition du choix de l'utilisateur et de celui de l'ordinateur.
const playerSelection = prompt("Rock, paper or scissors ?").toLowerCase();
// const playerSelection = "paper";
const computeurSelection = computerPlay();
// const computeurSelection = "paper";

const playerWin = "You win  !";
const playerLoose = "You loose this time";
const draw = "Draw"
let result = "";

console.log(`player choice is ${playerSelection}, computer choice is ${computeurSelection}`);

function playRound(playerSelection, computeurSelection) {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        if ((computeurSelection === "rock") && (playerSelection === "paper")) {
            return playerWin;
        } else if ((computeurSelection === "rock") && (playerSelection === "scissors")) {
            return playerLoose;
        } else if ((computeurSelection === "paper") && (playerSelection === "scissors")) {
            return playerWin;
        } else if ((computeurSelection === "paper") && (playerSelection === "rock")) {
            return playerLoose;
        } else if ((computeurSelection === "scissors") && (playerSelection === "paper")) {
            return playerLoose;
        } else if ((computeurSelection === "scissors") && (playerSelection === "rock")) {
            return playerWin;
        } else {
            return draw;
        }
    } else {
        alert("Please enter a correct value");
    }
}
// console.log(playRound(playerSelection, computeurSelection));

function game(numberOfRound) {
    for (let i = 0; i <= numberOfRound; i++) {
        let loss = 0;
        let win = 0;
        let tie = 0;
        playRound(playerSelection, computeurSelection);
        if (playRound = playerWin) {
            win = win + 1;
        } else if (playRound = playerLoose) {
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

game(prompt(""));