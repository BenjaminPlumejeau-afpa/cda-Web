console.log("Hello World !");

// Fonction calculant la somme des nombres paires de 1 a N
function sommePaire(n) {
    let somme = 0;
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            somme += i;
        }
    }
    return somme;
}

// Fonction Verifiant si une chaine est un palindrome
function estPalindrome(chaine) {
    let palindrome = false;
    for (let i = 0; i < (chaine.length); i++) {
        palindrome = chaine[i] === chaine[(chaine.length - i - 1)]
    }
    return palindrome;
}

// Fonction verifiant si 2 chaines sont des anagrammes
function sontAnagrammes(chaine1, chaine2) {

    // si les chaines ne font pas la meme taille elles ne peuvent pas être anagrammes
    if (chaine1.length !== chaine2.length) {
        return false;
    }

    // on copie les caracteres des chaines dans des tableaux puis on les tris alphabetiquement
    let tab1 = [];
    let tab2 = [];
    for (let i = 0; i < chaine1.length; i++) {
        tab1.push(chaine1[i]);
        tab2.push(chaine2[i]);
    }
    tab1.sort();
    tab2.sort();

    // on parcours les tableaux ; s'ils sont identiques les 2 chaines sont annagrammes
    let anagramme = true;
    let i = 0;
    while ((i < tab1.length) && anagramme) {
        anagramme = (tab1[i] === tab2[i]);
        i++;
    }

    return (anagramme);
}

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


//  -- Appel des fonctions --

// Appel de sommePaire
let n = 7;
console.log("La somme des nombres paires jusqu'à ", n, " est de ", sommePaire(n));

// Appel de estPalindrome
let chaine = "azereza";
if (estPalindrome(chaine)) {
    console.log(chaine, " est un palindrome")
} else {
    console.log(chaine, " n'est pas un palindrome")
}

// Appel de sontAnagrammes
let chaine1 = "icoucou"
let chaine2 = "oucocui"
if (sontAnagrammes(chaine1, chaine2)) {
    console.log(chaine1, " et ", chaine2, " sont des anagrammes")
} else {
    console.log(chaine1, " et ", chaine2, " ne sont pas des anagrammes")
}

// Devine le nombre : 
let saisie = prompt("Voulez-vous jouer à 'Devine le nombre' ? (o / n)");
if (saisie === "o") {
    let min = 0;
    let max = 100;
    alert("Choisissez un nombre entre " + min + " et " + max + ", et retenez le bien !");
    devineNombre(min, Math.trunc(max / 2, max));
}