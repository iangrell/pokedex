import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { sandboxPokemonsService } from "../Services/SandboxPokemonsService.js"
import { Pop } from "../Utils/Pop.js"


export class SandboxPokemonsController {
    constructor() {
        console.log('test from Sandbox controller')
    }

    async addPokemon(){
        try {
            await sandboxPokemonsService.addPokemon()
            Pop.toast('Added Pokemon to Pokedex')
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}