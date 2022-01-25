//génération des variables de choix
const rock = 100 / 3;
const paper = rock * 2;
const scissors = rock * 3
    // console.log(Rock);
    // console.log(Paper);
    // console.log(Scissors);

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

console.log(`player choice is ${playerSelection}, computer choice is ${computeurSelection}`);

function playRound(playerSelection, computeurSelection) {
    if ((computeurSelection === "rock") && (playerSelection === "paper")) {
        return `You win, ${playerSelection} beat ${computeurSelection}`;
    } else if ((computeurSelection === "rock") && (playerSelection === "scissors")) {
        return `You loose, ${playerSelection} is beaten by ${computeurSelection}`;
    } else if ((computeurSelection === "paper") && (playerSelection === "scissors")) {
        return `You win, ${playerSelection} beat ${computeurSelection}`;
    } else if ((computeurSelection === "paper") && (playerSelection === "rock")) {
        return `You loose, ${playerSelection} is beaten by ${computeurSelection}` ;
    } else if ((computeurSelection === "scissors") && (playerSelection === "paper")) {
        return `You loose, ${playerSelection} is beaten by ${computeurSelection}` ;   
    } else if ((computeurSelection === "scissors") && (playerSelection === "rock")) {
        return `You win, ${playerSelection} beat ${computeurSelection}`;
    } else {
        return `${playerSelection} vs ${computeurSelection}, Draw`
    }
}
// console.log(playRound(playerSelection, computeurSelection));
function game(nb) {
    for (let i=0; i<nb; i++) {
        playRound(playerSelection, computeurSelection)
    }
}