const date = new Date();

date.getDay() // 3

date instanceof Date; //true

const students = new Array('charlie', 'joey', 'ozzie');

const myObj = new Object({name: 'Charlie'});

function Dog() {
  console.log('Making a dog! Woof, woof!');
}

const dog1 = Dog();

const dog2 = new Dog(); // THIS IS A CONSTRUCTOR

dog2;







function Dog(name) {
  this.name = name;
  console.log(this.b);
};

const harper = new Dog('harper');

const student = {
  name: 'Sally',
  age: 10,
  dob: 'December 19',
}

const {name, age, dob} = student
// THIS IS THE SAME AS SAYING:
// const name = student.name
// const age = student.age
// const dob = student.dob



const stephanie = {
  name: 'Stephanie',
  greeting() {
    console.log(`What up! I am ${this.name}.`)
  }
}

// look up .bind, .call, .apply