// Fonction permettant de trouver le nombre de l'utilisateur
function devineNombre(min, actuel, max) {
    let reponse = prompt(actuel + ". + (Plus grand), - (Plus petit), = (Trouvé !)");

    if ((reponse !== "+") && (reponse !== "-") && (reponse !== "=")) {
        throw new Error("Erreur de saisie - Mauvais opérateur ('" + reponse + "')");
    } else {
        if (reponse === "+") {
            if (actuel >= max - 1) {
                alert("Trouvé ! Votre nombre était " + max);
            } else {
                devineNombre(actuel, Math.trunc((actuel + max) / 2), max);
            }
        } else if (reponse === "-") {
            if (actuel <= min + 1) {
                alert("Trouvé ! Votre nombre était " + min);
            } else {
                devineNombre(min, Math.trunc((actuel + min) / 2), actuel);
            }
        } else {
            alert("Trouvé ! Votre nombre était " + actuel);
        }
    }
}

// Appel de la fonction 
let saisie = prompt("Voulez-vous jouer à 'Devine le nombre' ? (o / n)");
if (saisie === "o") {
    let min = 0;
    let max = 100;
    alert("Choisissez un nombre entre " + min + " et " + max + ", et retenez le bien !");

    try {
        devineNombre(min, Math.trunc(max / 2, max), max);
    } catch (e) {
        console.error(e);
    }
}