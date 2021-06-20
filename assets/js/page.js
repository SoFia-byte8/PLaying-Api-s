
const containerPotman = document.querySelector(".container-Potman");

function apiPokemon (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((rest) => rest.json())
    .then((data) => {
        pokemonCarta(data); });
    } 

    

function getPokemon (number){
    for (let i = 1; i <= number; i++) {
        apiPokemon(1); 
        
    }
}


function pokemonCarta (pokemon){
    const card = document.createElement ('div');
    card.classList.add('pokemon_card');

    const imgContainer = document.createElement ('div');
    imgContainer.classList.add('pokemon_img');

    const img = document.createElement ('img');
    img.src = pokemon.sprites.from_default

    imgContainer.appendChild(img);

    const number = document.createElement ('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement ('p');
    name.classList.add('name');
    name.textContent = pokemon.name;
    
    card.appendChild(imgContainer);
    card.appendChild(number);
    card.appendChild(name);
    
    containerPotman.appendChild(card);
     
    

}

apiPokemon(8);

console.log('containerPotman');












