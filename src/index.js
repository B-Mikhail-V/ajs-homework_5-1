import Bowman from './bowman.js';
import Magician from './magician.js';
import Swordsman from './swordsman.js';
import Undead from './undead.js';
import Daemon from './daemon.js';
import Zombie from './zombie.js';

const bow1 = new Bowman('persona1');
bow1.levelUp();
bow1.damage(20);
console.log(bow1);
