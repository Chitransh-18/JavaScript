// "Use strict" // treat all JS code as newer version

// alert(3+3) this doesn't work anymore in Vs code but can still work in browser

console.log(3+3) // Code readibility should be considered highly.

console.log("Chitransh Saxena")

let name = " Chitransh Saxena"
let age = 21
// let isLoggedin = "True"


// number => 2 to pwer 53
// bigint will not be used much 
// string = ""
// boolean = true/false
// null = standalone value
// undefined = variable is declared but not assigned any value
// symbol = unique tools like Figma use too much of it

//object 

console.log(typeof name);

/*
Primitive
It is of 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt;
*/

const score = 100
const scoreValue = 100.33

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const Bignumber = 222232325615n 
// the n in the will convert the number automatically to big int

/*
Refernce Type (Non Primitive)

Types: Array, Objects, Functions
*/

const heros = ["Iron Man", "Captain America", "Thor"]

let myObj = {
  name: "Chitransh",
  age: 21,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof Bignumber);
console.log(type);

// There are two types of memory 
// Stack (Primitive) and Heap (Non primitive)
// primary difference between stck and heap is: 
// Whenever you assgin a variable in stack it gives you a copy of the original value so any changes made will be in the copy
// whereas in heap you are given a refrence so anychanges made will be result in the change of original value of the variable
// Stack is faster than heap because it is faster to access the memory location in stack than in heap