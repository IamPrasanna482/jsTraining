 /**************************************************  Variables & DataType ********************************************************** */


const userGender = 'M'  // can't be changed throughout the program
// userGender = 'F' // throws error as const cant be changed

{
    let x = 2;  // can't be accessed outside this local scope
    var y = 5;  // can be accessed outside this scope
}

// console.log(x);  // throws error
console.log(y);

 /**************************************************  Primitive DataType ********************************************************** */
 var name = "prasanna";
var age = 22;
var lives = true;
var bigInt = 123456789012345678901234567890n;  // append 'n' at last to declare it as bigInt
var paymentMode = null;  // can be initialized in future
var someValue;
var mySymbol = Symbol("key1");


/**************************************************  Referenced DataType ********************************************************** */

// Referenced Datatypes => In JavaScript, reference data types, also known as reference values or reference types, are
//  types that hold references to memory locations where the actual data is stored. Unlike primitive data types, which hold the data itself,
//  reference data types point to the location where the data is stored. Here are the main reference data types in JavaScript:
// Objects, Arrays, Function, Date, Map, Set

// 1. Objects

const jsUser = {
    name : "prasanna",
    age : 22,
    location : "gzb",
    email : "prasannagnihotri@bigohtech.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.lastLoginDays); // 2 methods to access obeject's values
console.log(jsUser["location"]);

// we can change the values of an object
jsUser.age = 23;

// we can also restrict changing of values using freeze()
// Object.freeze(jsUser);

jsUser["name"] = "prasoon" // will not throw error & not change value 
console.log(jsUser.name);

//  adding function to an object
jsUser.greetingTwo = function(){
    console.log(`hello jsUser, ${this.name}`);
}

console.log(jsUser.greetingTwo())

// print the object
console.log(jsUser);


// 2. Arrays

const myArr = [2,4,5,1,7,6,"prasanna", true, null];
// copy operations in array creates shallow copy ( same reference point, changes in one leads to changes in another)

const myHeroes = ["shaktiman","homelander"];
const myArr2 = new Array(1,4,2,5);

// Array methods

myArr.push(6); // insertion at end
myArr.pop(); // removes last element
myArr.unshift(9);// inserts at start and shift all rem elements to right, argument is the number to be inserted
myArr.shift(); /// removes from start
// console.log(myArr);

// console.log(myArr.includes("prasanna")); // true
// console.log(myArr.indexOf("prasanna")); // 6

const newArr = myArr.join('-') // convert to string
// console.log(typeof(newArr)); string

// 3. Functions

function sayMyName(){
    console.log('prasanna');
}

// // sayMyName();

function addTwoNumbers( number1, number2) {
    console.log(number1+number2);
    return number1+number2;
}

const result = addTwoNumbers(3,4); // if arguments are less than defined, it returns NaN, else it takes first 2 arguments
// console.log(result);



 /**************************************************  Operators ********************************************************** */

// Arithmetic Operators
let a = 10;
let b = 5;

console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0
console.log(++a);   // Output: 11
console.log(--b);   // Output: 4


// Assignment Operators
// =, +=, -=, *=, /=, %=

//Comparison Operators
// ==, !=, ===, !===, >=, <=, >, <

// Logical Operators
// &&, ||, !, ^







