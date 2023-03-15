import { PokeAPIController } from "./Controllers/PokeAPIController.js";
import { SandboxPokemonsController } from "./Controllers/SandboxPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokeAPIController = new PokeAPIController();
  sandboxPokemonsController = new SandboxPokemonsController();
}

window["app"] = new App();
