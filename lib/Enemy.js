const Potion = require('./Potion');
const Character = require('./Character');

class Enemy {
  constructor(name, weapon) {
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  }

  getHealth() {  
    return `The ${this.name}'s health is now ${this.health}!`;
  };

  isAlive() {
    if (this.health === 0) {
      return false;
    }
    return true;
  };

  getAttackValue() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  };

  reduceHealth(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
  };

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };
}



module.exports = Enemy;
