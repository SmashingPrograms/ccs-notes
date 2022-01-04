// THIS IS A SINGLE-LINE COMMENT

/* 
    THIS IS HOW YOU MAKE A MULTI-LINE COMMENT
*/




//// always console log a JS file to start off, for testing purposes

// --- \\

// console.log("Hello");

// --- \\

// BY THE WAY: To move the console in the browser, use the three dots, go to Dock Side to choose.

// Functions:
// * Should do one thing, one thing really well.
// * There are different types of functions—fat arrow expressions, IFFEs, regular functions, etc.
// * Functions can be given arguments, but this is not required
// * Take for example:

// --- \\

// function square() {
//     return;
// }

// --- \\

// square() name of function
// now will return undefined

// --- \\

// function square(num) {
//     return;
// }

// --- \\

// num is a parameter/argument of function square()

// --- \\

// function power(num1, num2) {
//     const result = Math.pow(num1, num2)
//     return result;
// //     // console.log("sdfkoasdkof")
// }

// power(7, 3);

// --- \\

// power(7, 3); is a function call
// num1 and num2 are two parameters, can have as many parameters as needed
// Math.pow(num1, num2) = num1 to the num2th power
// You can also say num1 ** num2 to do the same thing
// return result will not return undefined, but will return the result variable
// console.log after return will NOT WORK, BECAUSE return ends the function

// --- \\

// const returnedResult = power(7, 3);

// --- \\

// A function call can be passed into a variable to store the returned result IN that variable.

// function power(num1, num2, num3) {
//     const result = Math.pow(num1, num2)
//     return result;
// }

// --- \\

// the above code will not break because you can have unused parameters in your function

// --- \\

// function power(num1, num2, num3) {
//     const result = Math.pow(num1, num2)
//     console.log(result);
//     if (num3) {
//         alert("Hey!");
//     }
//     return result;
// }

// --- \\

//Above code will not break, but num3 returned as undefined, so therefore if will not evaluate to true.

// --- \\

// function power(num1, num2, num3) {
//     return;
// }

// const returnedResult = power(7, 3, 4);

// --- \\

// Above code will not break, because function doesn't have to return anything, and parameters don't have to be used.

// --- \\

// function power(num1, num2) {
//     console.log(this);
//     console.log(arguments);
//     return;
// }

// const returnedResult = power(7, 3, 4);

// --- \\

// You can pass more arguments than exist in a function call than are defined in the function, and it will not error out.

// --- \\

(function() {
    "use strict";
    function power(num1, num2) {
        console.log(this);
        console.log(arguments);
        return num1 ** num2;
    }

    const returnedResult = power(7, 3, 4);
})();

// --- \\

// Above is an anonymous function or an IIFE, immediately invoked function expression.
// Creates a new scope
// Value of "this" in power() is undefined. In strict mode, it's undefined. In sloppy mode, it is the WINDOW object.
// Value of "arguments" is "Arguments(3) [7, 3, 4, callee: (...), Symbol(Symbol.iterator): ƒ]" in console
// Strict mode ("use strict";) doesn't allow certain things like x = y without var, let, const to be accepted.
// Function declarations ("function power(num1, num2) {}") get HOISTED in their ENTIRETY, meaning you could CALL the function (as "power(7, 3)") before the function is defined.


















// AFTER BREAK:


function calcTip(bill, tipRate = 0.2) {
    return bill * tipRate;
}

calcTip(100, 0.25);
calcTip(200);

// tipRate = 0.2 is a default that is passed in in case there isn't anything passed into that position in a function call. If a value is passed into that position, it can be overwritten.


// const calcTip = function(bill, tipRate = 0.2) {
//     return bill * tipRate;
// }

// The above is a FUNCTION EXPRESSION, i.e. a function stored as a value in a variable.

// calcTip();
// console.log(calcTip);

// var calcTip = function(bill, tipRate = 0.2) {
//     return bill * tipRate;
// }

// calcTip(200);

// If you use var, BE CAREFUL. The variable will get hoisted, but the function will not
// console.log(calcTip) above returns undefined
// calcTip() above will return "TypeError: calcTip is not a function" because it is trying to read "undefined" as a function.
// Variable will get hoisted but function will not in var, due to scope issues.
// calcTip() below will work though.



// ARGUMENTS IN IIFEs


(function(greeting) {
    console.log(greeting);
})("Hello");

// That's how you use arguments in IIFEs
// Use case: make something run immediately, parameters make it pass while it ran

// Further examples of kinds of functions:

function sum1(num1, num2) {
    return num1 + num2;
}

const sum2 = function() {
    return num1 + num2;
}

const sum3 = (num1, num2) => {
    return num1 + num2;
}

const sum4 = (num1, num2) => num1 + num2;

//sum1 is a FUNCTION DECLARATION
//sum2 is a FUNCTION EXPRESSION
//sum3 is a fat arrow with an EXPLICIT RETURN
//sum4 is a fat arrow with an IMPLICIT RETURN

// Fat arrows don't create new scope
// functions create new scope


const person = (name, favColor, pet) => ({name: name, favColor: favColor, pet: pet});

// An object needs to be in parenthesis before the curly brackets IN AN IMPLICIT RETURN FAT ARROW FUNCTION because otherwise it interprets it as a code block (code block is like "function() --->{}<---") 





//EVENT LISTENER for FAT ARROW FUNCTIONS



const button = document.querySelector('button').addEventListener('click', function() {console.log(this)}) //correct
// const button = document.querySelector('button').addEventListener('click', () => console.log(this)) //incorrect


/////// OBJECTS WITH FUNCTIONS


const dog = {
    name: "Charlie",
    greeting: () => console.log(`${this.name} says woof, woof!`)
}

dog.greeting();

// ABOVE DOES NOT WORK, more like "_ says woof, woof!"

const dog = {
    name: "Charlie",
    greeting: function() {
        console.log(`${this.name} says woof, woof!`);
    }
}

dog.greeting();

// ABOVE DOES WORK

// A method is a function called against an object. Example: dog.greeting() above.


//Functions with an OBJECT as an argument:

function defaults({isHungry = false, hasFur = true}) {
    if (isHungry) {
        console.log(`I want tacos!`);
    }

    if (hasFur) {
        console.log(`It's hot in here!`)
    }
}

defaults()

// above is WRONG because an OBJECT was passed in the function, but was NOT PASSED IN to the function CALL

defaults({isHungry: true});

//Now it's not mad at you anymore! An object was passed in this time.

// function defaults only has 1 parameter: an object
// The object itself does NOT HAVE A DEFAULT
// If you call it without anything in here, it's undefined

function defaults({isHungry = false, hasFur = true} = {}) {
    if (isHungry) {
        console.log(`I want tacos!`);
    }

    if (hasFur) {
        console.log(`It's hot in here!`)
    }
}

// We set a default for the object ITSELF.

// Now this works:

defaults({});

// :)

