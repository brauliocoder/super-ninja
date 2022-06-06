class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log(`Nombre: ${this.name}`);
  }

  showStats() {
    console.log(`Nombre: ${this.name}, Salud: ${this.health}, Velocidad: ${this.speed}, Fuerza: ${this.strength}`);
  }

  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }

  speakWisdom(){
    super.drinkSake();
    console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
  }
}

const zen_master = new Sensei("Master Splinter");
console.log(zen_master.health);
console.log(zen_master.speed);
console.log(zen_master.strength);
console.log(zen_master.wisdom);
zen_master.speakWisdom();
console.log(zen_master.health);
zen_master.drinkSake();
console.log(zen_master.health);