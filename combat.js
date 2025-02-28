
// affiche le nom du gagnant ou match nul
function displayWinner(winnerData) {
    // On recupere le nom du vainqueur et on affiche une popup
    console.log(winnerData)
    if (winnerData == "Match nul") {
        document.getElementById("resultat").innerHTML = "Match nul !"
    }
    else {
        document.getElementById("resultat").innerHTML = winnerData + " remporte le match !"
    }
}

// transforme les statistiques 1-100 en 1-5 pour le score de combat
function calculateFightScore(heroStats) {
    arrayStat = Object.values(heroStats.powerstats)
    console.log("Stats " + arrayStat)
    console.log("Card")
    let score = 0
    for (let i = 0; i < arrayStat.length; i++) {
        score += Math.round(arrayStat[i] / 20)
    }
    console.log("CFS " + score)
    return score
}

// génére nombre aléatoire 1-20
function addD20() {
    resultD20 = Math.ceil(Math.random() * 19) + 1
    console.log("D20 " + resultD20)
    return resultD20
}

// récupère les scores de combat + score aléatoire et renvoie le nom du gagnant
function heroesFight(firstOpponent, secondOpponent) {
    //console.log("testcombat")
    scoreFirstOpponent = calculateFightScore(firstOpponent) + addD20()
    scoreSecondOpponent = calculateFightScore(secondOpponent) + addD20()
    console.log("score : " + scoreFirstOpponent + "/" + scoreSecondOpponent)

    firstOpponentName = firstOpponent.name
    secondOpponentName = secondOpponent.name
    console.log("match : " + firstOpponentName + "/" + secondOpponentName)


    if (scoreFirstOpponent > scoreSecondOpponent) {
        return firstOpponentName
    }
    else if (scoreFirstOpponent < scoreSecondOpponent) {
        return secondOpponentName
    }
    else if (scoreFirstOpponent == scoreSecondOpponent) {
        return "Match nul"
    }
}

// remplace les (nombreuses) statistiques vides de l'API par un score aléatoire (1-100)
function replaceNullByValor(objet) {
    if (objet.powerstats.intelligence == 'null') {
      objet.powerstats.intelligence = Math.ceil(Math.random() * 99) + 1
      // console.log(objet.powerstats.intelligence)
    }
    if (objet.powerstats.strength == 'null') {
      objet.powerstats.strength = Math.ceil(Math.random() * 99) + 1 ;
      // console.log(objet.powerstats.strength)
    }
    if (objet.powerstats.speed == 'null') {
      objet.powerstats.speed = Math.ceil(Math.random() * 99) + 1 ;
      // console.log(objet.powerstats.strength)
    }
    if (objet.powerstats.durability == 'null') {
        objet.powerstats.durability = Math.ceil(Math.random() * 99) + 1;
    }
    if (objet.powerstats.power == 'null') {
        objet.powerstats.power = Math.ceil(Math.random() * 99) + 1;
    }
    if (objet.powerstats.combat == 'null') {
        objet.powerstats.combat = Math.ceil(Math.random() * 99) + 1;
    }
}

// bouton pour lancer un nouveau combat
let button = document.querySelector(".nextRound");
button.addEventListener("click", newMatch)

function newMatch() {
    run();
    document.getElementById("resultat").innerHTML = null
}
