import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

const pokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 5000
})

class PokeAPIService {

    async GetAllPokemon() {
        const res = await pokemon.get('pokemon')
        console.log('[Pokemon]', res.data)
        appState.wildPokemon = res.data.results
        console.log('from appState', appState.wildPokemon)
    }

    async getOnePokemon(name) {
        const res = await pokemon.get(`pokemon/${name}`)
        console.log('[one API pokemon]', res.data)
        appState.activePokemon = new Pokemon(res.data)
        console.log(appState.activePokemon)
    }



}

export const pokeAPIService = new PokeAPIService()