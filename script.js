//génération des variables de choix
const rock = 100 / 3;
const paper = rock * 2;
const scissors = rock * 3
    // console.log(Rock);
    // console.log(Paper);
    // console.log(Scissors);

function computeurPlay() {
    // Génération de la variable du choix de l'ordinateur pour le tour 
    let i = Math.random() * 100;
    console.log(`valeur de i ${i}`);
    if (i <= rock) {
        return "rock";
    } else if (i <= Paper) {
        return "paper";
    } else {
        return "scissors";
    }
}

// définition du choix de l'utilisateur et de celui de l'ordinateur.
const playerSelection = prompt("entrer votre choix").toLowerCase();
const computeurSelection = computeurPlay();

function playround(playerSelection, computeurSelection) {
    if ((computeurSelection === rock) && (playerSelection === paper) {

        }
    }