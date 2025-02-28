
run()

async function run() {
    // Faire deux requetes pour recuperer deux heroes aleatoires
    let randomNumber = Math.ceil(Math.random() * 730) + 1;
    let randomNumber2 = Math.ceil(Math.random() * 730) + 1;

    let urlAPI = `https://superheroapi.com/api/8902eb6c8438f98274f6e5b3c825652f/${randomNumber}`
    let urlAPI2 = `https://superheroapi.com/api/8902eb6c8438f98274f6e5b3c825652f/${randomNumber2}`


    let firstHero = await getData(urlAPI)
    let secondHero = await getData(urlAPI2)

    console.log(firstHero)

    replaceNullByValor(firstHero)
    replaceNullByValor(secondHero)

    displayHero(firstHero, '#first-hero')
    displayHero(secondHero, '#second-hero')

    // Result me permet de savoir qui a gagné le combat
    let result = heroesFight(firstHero, secondHero)

    // On force le code a attendre 2 secondes avant d'afficher le vainqueur
    setTimeout(() => {
        // On passe le vainqueur a la fonction qui gere l'affichage
        displayWinner(result)
    }, 2000);

}

// Deux parametres, un qui definit les données du hero
// Et l'autre qui definit l'endroit ou on souhaite inserer les données
function displayHero(heroData, heroCard) {
    // On selectionne la card qu'on va vouloir mettre a jour
    let container = document.querySelector(heroCard)
    // console.log(container)
    //Affichage nom Hero  
    container.querySelector("h2").textContent = heroData.name;
    //Affichage image 
    let Hero = container.querySelector("img");
    Hero.src = heroData.image.url;
    //Affichage stats 
            //Intelligence 
    let ProgressInt = container.querySelector('.intel');
    let txtInt = container.querySelector('.valueIntel');
    ProgressInt.value = heroData.powerstats.intelligence;
    txtInt.innerHTML = heroData.powerstats.intelligence;
            //Force 
    let ProgressFor = container.querySelector('.force');
    let txtFor = container.querySelector('.valueForce');
    ProgressFor.value = heroData.powerstats.strength;
    txtFor.innerHTML = heroData.powerstats.strength;
            //Vitesse
    let ProgressVit = container.querySelector('.vitesse');
    let txtVit = container.querySelector('.valueVitesse');
    ProgressVit.value = heroData.powerstats.speed;
    txtVit.innerHTML = heroData.powerstats.speed;
            //Résistance 
    let ProgressRes = container.querySelector('.resistance');
    let txtRes = container.querySelector('.valueResistance');
    ProgressRes.value = heroData.powerstats.durability;
    txtRes.innerHTML = heroData.powerstats.durability;
            //Pouvoir 
    let ProgressPower= container.querySelector('.pouvoir');
    let txtPower = container.querySelector('.valuePouvoir');
    ProgressPower.value = heroData.powerstats.power;
    txtPower.innerHTML = heroData.powerstats.power;
            //Combat
    let ProgressFight = container.querySelector('.combat');
    let txtFight = container.querySelector('.valueCombat');
    ProgressFight.value = heroData.powerstats.combat;
    txtFight.innerHTML = heroData.powerstats.combat;  
}

// fetch les données de l'API
async function getData(URL) {
    let result = await fetch(URL)

    .then(response => {
        if (!response.ok) {
            
            throw new Error('Network response was not ok');
        }
        //console.log("gotoreturn")
        return response.json();
    })
    
    .then(data => {
        return data
    })
    .catch(error => {
        console.error("Error", error)
    })
    return result
}

