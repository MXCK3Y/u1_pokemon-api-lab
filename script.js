const button = document.querySelector('#btn')
const pokemonInput = document.querySelector('#searchBar')
const imageContainer = document.querySelector('#imgContainer')
const nameContainer = document.querySelector(`#nameContainer`)
const abilitiesContainer = document.querySelector(`#abilities`)
const descriptionContainer = document.querySelector(`#description`)
const height= document.querySelector(`#height`)
const weight= document.querySelector(`#weight`)

button.addEventListener(`click`, async () => {
    const Poke = pokemonInput.value
    const response = await axios.get(
     `https://pokeapi.co/api/v2/pokemon/${Poke}`)
     const pokeData = response.data
     console.log(pokeData)
    const pokePic = pokeData.sprites.front_default
    imageContainer.setAttribute(`src`, pokePic)
    const pokeName = pokeData.name
    nameContainer.textContent = pokeName
    const pokeAbilities =pokeData.abilities.map(ability => ability.ability.name).join(', ')
    abilitiesContainer.textContent= `Abilities: ${pokeAbilities}`
    const pokeId =pokeData.id
    console.log(pokeId)
    const info = await axios.get(`https://pokeapi.co/api/v2/characteristic/${pokeId}/`)
    const pokeDescription = info.data.descriptions[7].description
    console.log(info)
    descriptionContainer.textContent= `Description: ${pokeDescription}`
    const pokeWeight = pokeData.weight
    const pokeHeight = pokeData.height
    weight.textContent=(`Weight: ${pokeWeight}`)
    height.textContent=(`Height: ${pokeHeight}`)
 })

 