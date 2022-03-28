function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.speak = function() {
    console.log('sdfasdf')
  }
}

const charlie = new Dog('Charlie', 'Feist');

Dog.prototype.speak = function() {
  console.log("sdf")
}

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  speak() {
    console.log('sadfdsaf')
  }

  // static description() {
  //   console.log('sdgakodsgoksda')
  // }

  get description() {
    console.log(`${this.name} is a ${this.breed}`)
  }

  set nickname(name) {
    this.otherNames = this.otherNames ? [...this.otherNames, name] : [name];
  }
}

const howie = new Dog('Howie', 'feist')
const ozzie = new Dog('Ozzie', 'feist');
ozzie.description;



class Animal {
  constructor(name) {
    this.name = name;
    this.isHungry = true;
  }

  eat() {
    this.isHungry = false;
  }

  climb() {
    this.height = this.height * 2;
  }
}


class Monkey extends Animal {
  constructor(name, color) {
    super();
    this.tool = tool;
  }
}


const monkey = new Monkey('Arnold', 'stick');
monkey.eat();



//I need advice from a girl...

//I'm asking you personally. If you get into in a loving relationship with someone, dp they therefore become the most attractive person in the world to you?

//What does it mean to be more physically attracted to someone, while you're in love with someone else?

//Does that mean that when you're getting off by yourself, you'd rather think of the more attractive guy than your boyfriend? The thought of the other guy turns you on more?