// Start out talking about objects. Almost everything in JS is an object, and only 7 things in JS are not objects. They are called primitives:
// 1. Number
// 2. Boolean
// 3. String
// 4. undefined
// 5. null
// 6. Symbol
// 7. BigInt

// Objects are mutable, primitives are NOT MUTABLE, meaning they are not changeable.

let pet = 'cat';
pet[0] = 'r';
console.log(pet);
//DID NOT WORK because string is NOT MUTABLE

const person = {
  name: 'Daniel',
  isCool: true,
};


const student = new Object({
  name: 'Lauren',
  pet: 'cat',
});

const age = 30;

const mom = {
  name: 'Sally',
  age,
  // age: age,
};

const anotherStudent = {
  first: 'Justin',
  last: 'Hathaway',
  age: 21,
  greeting: function() {
    console.log(`Hi. I'm ${this.first}.`)
  },
};

anotherStudent.age;
anotherStudent.greeting();
anotherStudent.first = 'Henry'; // edit
anotherStudent.grade = 92; // add

anotherStudent.greeting = `Hi. My name is ${this.first} ${this.last}`;

delete anotherStudent.greeting;

const key = prompt("What information do you want? ")
anotherStudent[key];
anotherStudent['last'];
anotherStudent.last;

const dog = {
  name: "Charlie",
  age: 10,
  color: 'brown',
  isCool: true,
};

dog.weight = 29;

const dog2 = {
  name: 'Joey',
  age: 12,
  // bestFriend: dog,
}

dog2.bestFriend?.name = "Joe";
//THIS IS CALLED OPTIONAL CHAINING, if it is there, keep going, if it's not stop

const newDog = {
  name: "Howie",
  speak(greeting = 'Woof, woof!') {
    console.log(`${greeting}. My name is ${this.name}.`)
  } //there's this more abbreviated syntax of methods.
}

let person1 = {
  name: 'Larry',
}

let person2 = person1; // we pointed 2 labels to the same object, so it 

person1 === person2; //true

person2.name = 'Moe';

person1.name; //'Moe'

let person3 = {...person1} // makes identical object but not a pointer to the same object...

let student = {
  name: 'Sally',
}
function doStuff(student) { //this will actually update your object
  student.name = 'Charlie';
  console.log(student.name);
}
doStuff(student);
console.log(student.name);

const map = new Map() //this ITERATES
map.set('name', 'Mady');
map.name = 'Sally';

const prizes = new Map();
prizes.set(100, 'giraffe');
prizes.set(200, 'bear');
prizes.set(300, 'giant unicorn');

const score = 200;

console.log(`You win a ${prizes.get(score)}`)

const pet = {
  name: 'Charlie',
  age: 10,
}

map.set(pet, 'A very good boy');

for (const entry of prizes) { console.log(entry) };

prizes.has('200'); //false
prizes.has(200); //true


// ARRAYS
const movies = []
movies.push('Toy Story');
movies.push('Gladiator');

movies.length; // length of array

movies[1]; //Gladiator

movies[1] = 'The Room'; // ['Toy Story', 'The Room']

// SETS are different

// Difference from arrays: A value in the Set may only occur once; it is unique in the Set's collection.

const anotherSet = new Set(['one', 'two', 3]) // {'one', 'two', 3}

const dups = [1,2,3,3,3,3,3,3,3]

const uni = new Set(dups); // {1, 2, 3}