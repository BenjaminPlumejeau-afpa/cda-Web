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
function gagner(joueur, grille) {
    // on test d'abord les diagonales
    if (((grille[0][0] === joueur.symbole) && (grille[1][1] === joueur.symbole) && (grille[2][2] === joueur.symbole))
        ||
        ((grille[0][2] === joueur.symbole) && (grille[1][1] === joueur.symbole) && (grille[2][0] === joueur.symbole))) {
        return true;
    } else {
        // test des lignes et colonnes
        for (let i = 0; i < 3; i++) {
            if (((grille[i][0] === joueur.symbole) && (grille[i][1] === joueur.symbole) && (grille[i][2] === joueur.symbole))
                ||
                ((grille[0][i] === joueur.symbole) && (grille[1][i] === joueur.symbole) && (grille[2][i] === joueur.symbole))) {
                return true;
            }
        }
    }

    // si aucun des tests n'est positifs personne n'a gagné
    return false;
}


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
let tour = 1;
while (continuer) {
    let joueur = {};
    if (tour % 2 === 0) {
        joueur = j2;
    } else {
        joueur = j1;
    }

    grille = remplirCase(joueur, grille);
    if (gagner(joueur, grille)) {
        console.log(joueur.nom + " à gagné !");
        continuer = false;
    }
}