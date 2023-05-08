// PRIVATE or LOCALLY SCOPED
import { appState } from "../AppState.js"

function drawHeroes() {

  let template = ''

  appState.heroes.forEach(hero => {
    template += /*html*/`
    <div>
      ${hero.name} - ${hero.picture}
      <div>
        <button 
          class="btn btn-danger" 
          onclick="app.heroesController.b('${hero.name}')"
          >B</button>
      </div>
    </div>`
  })

  document.getElementById('app').innerHTML = template
}


export class HeroesController {

  // builds the controller
  constructor() {
    console.log('is the controller working?')
    drawHeroes()
  }

  // PUBLIC OR AVAILABLE FOR THE USER TO "CLICK"

  a() {
    console.log('cool you clicked a', 'it wasnt that cool')
    // do something cooler when you click this button
  }

  b(heroName) {
    console.log('b is cooler', '🧊', heroName)
  }





}