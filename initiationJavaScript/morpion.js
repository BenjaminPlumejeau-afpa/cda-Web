//fonction affichant la grille passée en paramètre
function afficheGrille(grille) {

    console.log("-------");
    for (let i = 0; i < grille.length; i++) {
        let row = "|";
        for (let j = 0; j < grille[i].length; j++) {
            row += grille[i][j] + "|";
        }
        console.log(row);
        console.log("-------");
    }
    console.log();
}

// fonction placant dans la grille la sélecion du joueur
function remplirCase(joueur, grille) {

    let row = prompt(joueur.nom + " Saisir la ligne de la case à remplir :") - 1;
    let col = prompt(joueur.nom + " Saisir la colonne de la case à remplir :") - 1;

    if (grille[row][col] === " ") {
        grille[row][col] = joueur.symbole;
    }

    afficheGrille(grille);
    return grille;
}

// fonction vérifiant si le joueur à gagné
function gagner(joueur, grille){}


//  - Programme Principal -   //

// création et remplissage de la grille
let grille = [];
for (let i = 0; i < 3; i++) {
    let row = [" ", " ", " "];
    grille.push(row);
}

afficheGrille(grille);

let j1 = { nom: "Joueur 1", symbole: "x" };
let j2 = { nom: "Joueur 2", symbole: "o" };



// Tant que la partie n'est pas finie continuer vaut true
let continuer = true;
//while (continuer) {

grille = remplirCase(j1, grille);

grille = remplirCase(j2, grille);

//}