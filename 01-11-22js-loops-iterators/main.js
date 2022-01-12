// for (let initialExpression = 0; condition; incrementExpression) {
//   //code block
// }

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
};

// console.log(i) // creates a REFERENCEERROR because i is not global!

// DO NOT USE VAR in a for loop iteration

// If you used var, it would leak out into the outer scope. But let is block-scoped

// Cannot be used to loop over object

const numbers = [1,2,3,4,5,6,7]

for (const number of numbers) {
  console.log(number);
}

const name = 'Gavin Figueruelo';

for (const letter of name) {
  console.log(letter);
};

for (const [index, number] of numbers.entries()) { //destructuring
  console.log(`index ${index} is ${number}`);
};

const student = {
  name: 'Sally',
  age: 100,
  isCool: true,
};

for (const key in student) {
  console.log(`${key} is ${student[key]}`)
}


let cool = true, i = 1;

while (cool === true) {
  console.log('You are cool!');
  i++;
  if (i > 100) {
    cool = false;
  };
};

do {
  i += 1;
  console.log(i);
} while (i > 5);



//forEach

const copy = [];

[1,2,3].forEach(function(item, index, arr) {
  copy.push(item);
});

console.log(copy);

const doubles = [1,2,3].map(function(num) {
  return num * 2;
});
// each element in array, executes the anonymous function


const roots = numbers.map(Math.sqrt);




[1,2,3,4,5,6,7].filter(function(num) {
  return num > 4;
}); // return which meet a certain condition, this one being num > 4;


['spray', 'exuberant', 'destruction', 'happy'].filter(word => word.length > 6);

[1, 2, 3].reduce(function(total, current) {
  return total + current;
}, 2); // parameter 2 of reduce is optional

