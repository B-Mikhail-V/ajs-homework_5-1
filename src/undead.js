import Character from './character.js';
import { typesList } from './typesList.js';

export default class Undead extends Character {
  constructor(name, type, health) {
    super(name, health);
    this.type = type || 'Undead';
    this.validate();
    this.health = typesList[this.type][0].health;
    this.level = typesList[this.type][0].level;
    this.attack = typesList[this.type][0].attack;
    this.defence = typesList[this.type][0].defence;
  }
}
