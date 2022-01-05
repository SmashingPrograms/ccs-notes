// DOM stands for document object model
// The HTML document is NOT the DOM
// The DOM is the way the browser represents HTML for JavaScript
// Elements in HTML become DOM nodes
// It looks like a tree... the DOM tree.

const element = document.querySelector('div');
console.log(element);
console.dir(element);

console.log(element.textContent); // console logs the CONTENT of the div
element.textContent = 'JavaScript is AWESOMMMM';
console.log(element.textContent); // this worked

const elements = document.querySelectorAll('div');

const img = document.querySelector('img');
console.dir(img);

const p = document.createElement('p')
p.textContent = "Love you Bill Murray";
p.classList.add('uppercase');
document.querySelector('body').appendChild(p);

const heading = document.createElement('h1');
heading.textContent = 'My Awesome Website';

const src = "http://img1.wikia.nocookie.net/__cb20140127222157/p__/protagonist/images/e/e7/TysonGranger3.jpg"

const desc = "Tyson";

const heading2 = `
<heading class="my-heading">
  <h1>My Awesome Website</h1>
  <p>Lorem ipsum dolor sit amet.</p>
  <img src=${src} alt=${desc} />
</heading>
`

document.body.insertAdjacentHTML('afterbegin', heading2);

const buttons = document.querySelectorAll('button');

function handleButtonClick(event) {
  alert("You clicked a button!");
  console.log('button', event);
  // event.stopPropagation();
};

//forEach is like a for loop, but as a METHOD that takes a CALLBACK, has to have a function passed into it

buttons.forEach(function(button) {
  button.addEventListener("click", handleButtonClick);
});

function handleSectionClick(event) {
  alert("You clicked on the section element!");
  console.dir('section', event);
};

const button = document.querySelector('button');
button.addEventListener("click", handleButtonClick);
const sect = document.querySelector('section');
sect.addEventListener("click", handleSectionClick, {capture: true});


//JavaScript timers
//setInterval and setTimeout


//setTimeout takes a function callback and a timeout (1000)

setTimeout(function() {
  alert("You are awesome!")
}, 10000);

//this function will run NO LESS THAN but possibly greater than X milliseconds

setInterval(function() {
  alert("JavaScript makes me happy!");
}, 10000)