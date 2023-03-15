import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

const sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/grell',
    timeout: 5000
})

class SandboxPokemonsService {

    async addPokemon() {
        const pokemon = appState.activePokemon
        const res = await sandbox.post('pokemon', pokemon)
        console.log('[added pokemon to sandbox]', res.data)
    }

}

export const sandboxPokemonsService = new SandboxPokemonsService()