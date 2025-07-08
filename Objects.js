// Singleton
// Object.create 

// Object Literals 

const mySym = Symbol('Key1')

const JS_User = {
    name:  "Chitransh Saxena",
    age: "21",
    Location: "Kota",
    [mySym]: "Keys_1",
    // to use the symbol you have to use it in this particular syntax of square brackets even for displaying it on console
    // If not the it will refer to some other declared symbol
    Email: "Chitranshsaxena85@gmail.com",
    IsLoggedIn: 'False',
    LastLoggin: ["Monday", "Saturday"]
}
console.log(JS_User);
console.log(JS_User.name);
console.log(JS_User[mySym])

