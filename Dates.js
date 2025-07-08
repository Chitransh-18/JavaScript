// dates
/*
const myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toISOString());
console.log(myDate.toJSON());

const myDate2 = new Date(2025,10,7) // In JS months begin from 0 (January)
console.log(myDate2.toDateString( ));
*/

//const myDate3 = new Date("2025-01-01"); 
// Since we used YYYY-MM-DD format, 01 stands for January 
// instead of Feburary if we would have used the normal declaration 
//console.log(myDate3.toDateString())

const date4 = new Date('2025', '6', '4')
console.log(date4.toDateString());

console.log(date4.toLocaleDateString('default',{
    weekday: 'long'
}))