



export class Pokemon{
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.nickName = data.nickName || 'n/a'
        this.img = data.sprites
        this.weight = data.weight
        this.height = data.height
        this.type = data.type

    }



    static wildPokemonList(pokemon) {
        return`
          <div class="row selectable">
            <h5 class="fw-bold" onclick="app.pokeAPIController.selectPokemon('${pokemon.name}')">${pokemon.name}</h5>
          </div>
          `
    }

    get activeTemplate() {
        return`
        <div class="row justify-content-center">
        <div class="col-10 activeSection text-center">
          <h3>${this.name}</h3>
          <h5>Nickname: ${this.nickName}</h5>
          <img src="${this.img.front_default}">
          <h5>Height: <span>${this.height}</span> | Weight: <span>${this.weight}</span></h5>
          <button class="btn btn-primary text-light" onclick="app.sandboxPokemonsController.addPokemon()">Trap, enslave, then force to fight for my entertainment</button>
        </div>
      </div>
      `
    }
}