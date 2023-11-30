/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {//insérer du texte dans le html
   let zoneScore = document.querySelector(".zoneScore span")
   let texteScore = `${score} / ${nbMotsProposes}`
   zoneScore.innerText = texteScore
}

/**
 * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
 * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
 */


/**
 * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
 * contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
 * 
 * @param {array[string]} listePropositions 
 * @return {number} : le score de l'utilisateur
 */
const afficherProposition = () => {
    
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    
    let score = 0
    let nbMotsProposes = 0
    let monBouton = document.getElementById("btnValiderMot")
    let zoneEcriture = document.getElementById("inputEcriture")
    let i = 0
    monBouton.addEventListener("click", () =>{
        console.log(zoneEcriture.value)
        i++
        listeMots[i]
        
    })

    afficherResultat(score, nbMotsProposes)
}