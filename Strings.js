// strings can be declared by both ways double or single quotes

const name = "Chitransh Saxena"
const repoCount = 5
// string interpolation = `` 
// we use this symbols to concatinate two strings together
// with help of ${variable name}

// const gameName = new String ("Chitransh")

/*
console.log(gameName);

console.log(gameName [0]);
console.log(gameName.length);

console.log(gameName.charAt(5)) // this tells us the charecter at 5th index
console.log(gameName.indexOf('h')); // this tells us the index of the first occurence of the character 'h'
*/

// const newString = gameName.substring(0,5) 
// this create a new strings which takes the value
// from previous string from 0 to 5 index
// console.log(newString);

// const anotherString = gameName.slice(-5, 0)
// console.log(anotherString);

// const test2 = gameName.slice(-6, -2); 
// this creates a new string which takes the value from the previous string from -6 to -2 index
// console.log(test2);  // should log "tran"

const test3 = "    Chitransh    "; 
// Suppose user gives spaces in the entered string which don't want then we could use the .trim() function to 
// remove the spaces from the string while printing
console.log(test3)
console.log(test3.trim())

const url = "https://chitransh.com/Chitransh%85Vlogs"
console.log(url.replace('%85','-')); 
// This function helps us to replace certain words from the text/url

console.log(url.includes('Chitransh')) 
// this function tells us if the word is present in the text or not

console.log(url.includes('Saxena'))