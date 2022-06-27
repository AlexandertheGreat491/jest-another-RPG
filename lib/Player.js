const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    //returns an object with various player properties
    Player.prototype.getStats = function () {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    //returns the inventory array or false if empty
    Player.prototype.getInventory = function () {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };
}
//when using prototype methods are only created once & new player objects inherit these methods.

//adds the getHealth() method
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};

//adds the isAlive() method

Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    return true;
};

//updates Player object with the reduceHealth() method.
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};
//conditional ensures that the health never goes negative.

//adds getAttackValue() method to the Player prototype
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

//adds addPotion() method to the Player prototype
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

//updates Player prototype with usePotion()
Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};
//.splice() removes items from an array and returns the removed item(s) as a new array.
//original inventory array has single Potion removed at specified index value & put new "removed items" array 
//then Potion at index [0] of "removed items" array save to potion variable
//.push() & .splice() methdos on the Array prototype.

module.exports = Player;