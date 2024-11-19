let pokémon = [];
let selectedPokemon = null;

function loadPokémon() {
    const fileUrl = "C:/Users/72461378/Desktop/PokemonFinderHTML/lista pokemon.txt";
    fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Errore nel caricamento del file.");
            }
            return response.text();
        })
        .then(data => {
            pokémon = data.split('\n').map(line => line.trim()).filter(line => line !== "");
            viewPokémon();
        })
        .catch(error => {
            console.error('Errore:', error);
            alert('Non è stato possibile caricare il file.');
        });
}

function viewPokémon() {
    const nameList = document.getElementById("pkList");
    nameList.innerHTML = "";
    pokémon.forEach(nome => {
        const nameElement = document.createElement("p");
        nameElement.textContent = nome;
        nameList.appendChild(nameElement);
    });
}

function fetchData() {
    if (pokémon.length === 0) {
        alert("La lista dei Pokémon non è stata caricata.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * pokémon.length);
    selectedPokemon = pokémon[randomIndex];

    const searchResult = document.getElementById("search-result");
    searchResult.textContent = `Il Pokémon casuale è: ${selectedPokemon}`;

    const pokeSprite = document.getElementById("pokeSprite");
    pokeSprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomIndex + 1}.png`;

    document.getElementById("takeButton").disabled = false;
}

function saveToLocalStorage() {
    if (selectedPokemon) {
        localStorage.setItem("selectedPokemon", selectedPokemon);
        alert(`${selectedPokemon} è stato salvato nel Local Storage!`);
    } else {
        alert("Nessun Pokémon selezionato.");
    }
}

document.addEventListener("DOMContentLoaded", loadPokémon);
