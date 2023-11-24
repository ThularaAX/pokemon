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
        pokemonImg.alt = pokemonData.name

        const pokemonName = document.createElement('h3')
        pokemonName.innerHTML = pokemonData.name

        pokemonCard.append(pokemonImg,pokemonName)
        ul.append(pokemonCard)
    })
}

document.getElementById('sortButton').addEventListener('click', () =>{
    // console.log("clicked")
    pokemonDataArray.sort((first,next) => {
        const firstName = first.name.toUpperCase()
        const nextName = next.name.toUpperCase()

        if(firstName < nextName) {
            console.log("clicked")
            return -1
        }
        if(nextName > firstName) {
            return 1
        }
        return 0
    })
    visualisPokeList(pokemonDataArray)
})

collectPokemon()