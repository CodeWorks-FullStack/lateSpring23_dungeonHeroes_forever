import { HeroesController } from "./Controllers/HeroesController.js";


class App {
  // We are creating an instance of the HeroesController
  heroesController = new HeroesController()
  // valuesController = new ValuesController();
}

window["app"] = new App();
