console.log('Prueba :D')



const pokemonContainer = document.querySelector(".pokemon-container");//Llamado y Conexion del Div en html y Js

let limit = 7;
let offset = 1;

//Conexion con la Api
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            pokemonCarta(data);
            //spinner.style.display = "none";
        });
}

//Limita a la Api, con ciertas peticiones de Bloques
function fetchPokemons(offset, limit) {
    for (let i = offset; i <= offset + limit; i++) {
        fetchPokemon(i);
    }
}

//Función para Ordenar las Cartas y su previsualización en el Front
function pokemonCarta(pokemon) {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("container-card");

    flipCard.appendChild(cardContainer);

    const card = document.createElement("div");
    card.classList.add("pokeimage");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    //card.appendChild(number);
    //card.appendChild(name);

    const cardBack = document.createElement("div");
    cardBack.classList.add("pokemon-block-back");

    cardBack.appendChild(progressBars(pokemon.stats));

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    pokemonContainer.appendChild(flipCard);
}

//Función, para respaldo de la Carta
function progressBars(stats) {
    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-container");

    for (let i = 0; i < 3; i++) {

        const stat = stats[i];

    }

    return statsContainer;
}
//Call



function time() {
    var html = ""
    setTimeout(function () {
        html = ""
        html += 1
        document.getElementById('start').value = html
    }, 1000)

    setTimeout(function () {
        html = ""
        html += 2
        document.getElementById('start').value = html
    }, 2000)

    setTimeout(function () {
        html = ""
        html += 3
        document.getElementById('start').value = html
    }, 3000)

    setTimeout(function () {
        html = ""
        html += 4
        document.getElementById('start').value = html
    }, 4000)

    setTimeout(function () {
        html = ""
        html += "Start!"
        document.getElementById('start').value = html
    }, 5000)

    setTimeout(function () {
        document.getElementById('containerStart').style.display = "none"
        fetchPokemons(offset, limit);
        fetchPokemons(offset, limit);
    }, 6000)
}

time()













