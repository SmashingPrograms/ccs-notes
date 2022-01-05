//Notes for homework:

/* Write the following as comments for each function on the homework assignment. They need to be wrote ABOVE THE FUNCTION:
    1. What's the input and where does it come from?
    2. What's the output and where does it go?
    3. Write a one-line purpose statement or a description in plain English that says what the function does.
    4. Write a type contract that states the function's name and the names and types of its parameters and return value.

She says, don't get overly hung up on the answers. You don't have to write a book on this!

*/

// Example for #1:

// --- \\

// var name = document.querySelector('.input-name').focus();

// --- \\

// Does querySelector have input? Yes. document.queryselector is a method, we're invoking it, and it's taking in .input-name as a string.
// It's trying to find an element in the DOM that matches the query "input-name".
// Elements have their own focus() method, called against a DOM element.

// --- \\

// document.querySelector('.profile-form').addEventListener('submit', saveProfile);

// --- \\

// addEventListener, saveProfile is a function allegedly written somewhere, 'submit' is an event passed into a button etc.
// What is the event we are listening for, what do we want to do when it is executed?


//EXAMPLE PROBLEM

//Here's a boiler plate:


/* function description */
/* parameter description */
/* return description */

// vvvvvvvvvv \\

/*
Calculate the square of a number
num is a Number to square
return the square
*/

//Function itself:

// function square(num) {
//     return num * num;
// }


// WE DO NOT HAVE TO DO THIS ONE, but she wanted to go over asserts anyway so we understand them...:

// 5. Write some examples of calling the function, including results you expect in each case.

// console.assert(square(2) === 4);
// console.assert(square(-1) === 1);

// assert only returns result if the evaluation is false. Useful for testing.
// in the console, assert will give you an error if evaluates to false. "Assert failed: ...."

// console.assert(square(-1) === 1, "square function isn't working")

// You can pass in this optional second option to choose what assert says when it fails