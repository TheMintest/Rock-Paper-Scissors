//génération des variables de choix
const Rock = 100 / 3;
const Paper = Rock * 2;
const Scissors = Rock * 3
console.log(Rock);
console.log(Paper);
console.log(Scissors);

function computeurPlay() {
    // Génération de la variable du choix de l'ordinateur pour le tour 
    let i = Math.random() * 100;
    console.log(`valeur de i ${i}`);
    if (i <= Rock) {
        console.log("Rock");
    } else if (i <= Paper) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

computeurPlay();