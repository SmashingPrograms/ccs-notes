// control flow - making decisions in our program that decides how it executes

/// IF ELSE (pseudocode)
// if(something truthy) {
//   do something;
// } else {
//   do something;
// }

// if (true) {
//   do something;
// }

// if (true) {
//   do something
// } else {
//   do something else
// }

// if (true) {
//   do something
// } else if (1) {
//   do something else
// } else {
//   do another thing
// }

// if (true) {
//   do something
// } else if (1) {
//   do something else
// } else if (2) {
//   do yet another thing
// } else {
//   do the last thing
// }

//not pseudocode//

const isCool = true;
const isHungry = true;
const isSleepy = true;

if (isCool) {
  console.log('You are cool!')
} else if (isHungry) {
  console.log('You are hungry!')
} else if (isSleepy) {
  console.log('You are sleepy!')
}


const hot = false;
const cold = false;

if (hot) {
  console.log('It is hot!');
} else if (cold) {
  console.log('It is cold!');
} else {
  console.log('The weather is awesome!');
}

function greeting(greeting, name) {
  if (name) {
    return `${greeting}, ${name}. It is nice to meet you.`
  }
  
  return `${greeting}. It is nice to meet you.`
}

greeting('Hi', 'Connor');



if (true || (true && false)) {
  console.log('It is true');
};

const name = 'Mady';
const booleanName = !name;



notName = !!name //converts it into a boolean, by double !, a coding trick invented a long time ago

let isHot, temp = 76

temp > isHot = true : isHot = false; // ternary. Meaning: if isHot is true, set it to false

const name = 'Charlie';

switch(name) {
  case 'Connor':
    console.log('Hi, Connor!');
    break;
  case 'Charlie':
    console.log('Hi, Charlie!');
    break;
  default:
    console.log('Hi. Whoever you are!');
}