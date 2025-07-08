const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'True', 'Chitransh']
// we could use different types of elements in a single array.
// JavaScript's arrays are resizeable.
// Array elements cannot be accessed using arbitary strings as indexes.

// Arrays in JavaScrit makes shallow copies.
// Shallow copies have the same refrence point
// Whereas the deep copies have different refrence points.

const array2 = [1, 2, 3, 4, 5]
// console.log(array2[0])

// Array Methods 

/*
array2.push(6)
array2.push(7)
console.log(array2);
array2.pop()
console.log(array2)


array2.unshift(7);
console.log(array2);
*/

/*
console.log(array2.includes(5))

const arr = array2.join()

console.log(array2);
console.log(arr);

console.log(typeof arr)
*/

// Slice , Splice 

console.log('A ', array2);
const newarray2 = array2.slice(0,4)
console.log(newarray2);
console.log('The array after slice operation: ', array2);


console.log('B ', array2 );
const newarray3 = array2.splice(0,4)
console.log(newarray3);

console.log('The array after Splice operation: ', array2);
