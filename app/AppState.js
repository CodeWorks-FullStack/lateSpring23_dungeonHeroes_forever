import { Hero } from "./Models/Hero.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  // IGNORE ABOVE ^^^^^

  // ⌨️ YOUR CODE BELONGS HERE

  heroes = [
    new Hero(
      {
        id: '123abc',
        name: 'Hercules',
        picture: '🦘',
        level: 10,
        health: 580
      }
    ),
    new Hero(
      {
        id: '123abd',
        name: 'Perseus',
        picture: '🐬',
        level: 11,
        health: 488
      }
    )
  ]




}





// IGNORE ME vvvvvvvvvvv
export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
