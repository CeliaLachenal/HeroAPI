 
// faire en sorte que ce qu'on écrive dedans vienne remplacer le name dans l'url : https://superheroapi.com/api/access-token/search/name
// Créer une carte HTML 
// injecter nom 
// injecter image 
// injecter stat 

console.log('debut log encyclopedi')
let recherche = document.querySelector('button')


recherche.addEventListener('click', async function(){
    //Récupération du nom de héro écrit dans l'input
    let heroName = document.getElementById("searchInput").value;
    let nameURL = `https://superheroapi.com/api/8902eb6c8438f98274f6e5b3c825652f/search/${heroName}`
    console.log(heroName)
    //récupération de l'id correspondant au nom du héro demandé dans l'input
    let infoEncyclo = await getData(nameURL)
    id = infoEncyclo.results[0].id
    idURL = `https://superheroapi.com/api/8902eb6c8438f98274f6e5b3c825652f/${id}`
    console.log(idURL)
    //injection des info dans la carte
    searchedHero = await getData(idURL)
    displayHero(searchedHero,'.encyclo')
    console.log(searchedHero)
    //Faire apparaitre la carte caché dans l'encyclopédie
    let card = document.getElementById('to_hide')
    card.classList.remove('hide')
    console.log(card)
} )
console.log



// let idURL = `https://superheroapi.com/api/access-token/search/${returnID()}`
// console.log(idURL)


