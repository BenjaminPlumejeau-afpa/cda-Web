// Fonction permettant de trouver le nombre de l'utilisateur
function devineNombre(min, actuel, max) {
    let reponse = prompt(actuel + ". + (Plus grand), - (Plus petit), = (Trouvé !)");

    if (reponse === "+") {
        if (actuel * 2 > max) {
            if (actuel + 5 > max) {
                return devineNombre(actuel, actuel + 1, max);
            } else {
                return devineNombre(actuel, actuel + 5, max);
            }
        } else {
            return devineNombre(actuel, actuel * 2, max);
        }
    } else if (reponse === "-") {
        return devineNombre(min, Math.trunc((actuel + min) / 2), actuel);
    } else {
        alert("Trouvé !");
    }
}

// Appel de la fonction 
let saisie = prompt("Voulez-vous jouer à 'Devine le nombre' ? (o / n)");
if (saisie === "o") {
    let min = 0;
    let max = 100;
    alert("Choisissez un nombre entre " + min + " et " + max + ", et retenez le bien !");
    devineNombre(min, Math.trunc(max / 2, max));
}