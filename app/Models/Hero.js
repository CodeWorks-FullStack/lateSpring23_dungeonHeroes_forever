import { generateId } from "../Utils/generateId.js"

export class Hero {

  // constructor is responsible for building things
  // 🐢 a special function used for instantiating an instance of a class 
  /**
   * 
   * @param {{id: string, name: string, picture: string, health: number, level: number}} data
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.picture = data.picture
    this.health = data.health
    this.level = data.level
  }

}