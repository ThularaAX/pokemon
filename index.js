const pokemonDataArray = []

async function collectPokemon() {
    const request = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const dataList = await request.json()

    for (const { url } of dataList.results) {
        const pokemonResponse = await fetch(url)
        const pokemonData = await pokemonResponse.json()

        pokemonDataArray.push({
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
        })
    }
    visualisPokeList(pokemonDataArray);
}

function visualisPokeList(dataListOfPoke){
    const ul = document.getElementById('pokemonList')
    ul.innerHTML = ''

    dataListOfPoke.forEach(pokemonData =>{
        const pokemonCard = document.createElement('div')
        pokemonCard.className = 'poke_card'

        const pokemonImg = document.createElement('img')
        pokemonImg.src = pokemonData.image

        pokemonCard.appendChild(pokemonImg)
        ul.appendChild(pokemonCard)
    })
}

collectPokemon()