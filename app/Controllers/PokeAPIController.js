import { Pop } from "../Utils/Pop.js"
import { pokeAPIService } from "../Services/PokeAPIService.js"
import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { setHTML } from "../Utils/Writer.js"

function _drawWildPokemonList() {
    let pokemon = appState.wildPokemon
    let template = ''
    pokemon.forEach(p => template += Pokemon.wildPokemonList(p))
    setHTML('wildPokemon', template)
}

function _drawActivePokemon() {
    let pokemon = appState.activePokemon
    setHTML('activePokemon', pokemon.activeTemplate)
}

export class PokeAPIController {
    constructor(){
        console.log('test from PokeAPI controller')
        this.GetAllPokemon()
        appState.on('wildPokemon', _drawWildPokemonList)
        appState.on('activePokemon', _drawActivePokemon)
    }

    async GetAllPokemon() {
        try {
            await pokeAPIService.GetAllPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async selectPokemon(name) {
        try {
            console.log('selected', name)
            await pokeAPIService.getOnePokemon(name)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}