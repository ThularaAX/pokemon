console.log("Hi Pokemon")

async function collectPokemon(){
    const request = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const dataList = await request.json()
    visualisPokeList(dataList.results)
}

function visualisPokeList(dataListOfPoke){
    dataListOfPoke.forEach(pokemon =>{
        const ul = document.querySelector('ul')
        const li = document.createElement('li')
        li.innerText = pokemon.name
        ul.append(li)
    })
}

collectPokemon()