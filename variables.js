const accountId = 554455
var accountPassword = "password123"
let accountEmail = "Chitransh07@gmail.com"
accountCity = "Kota"

// accountId = 12121 This is not allowed since once it's declared as constant. It cannot be changed.
console.log(accountId)

accountCity = "Noida"

/*
 Prefer not to use var command as you wont be able to use the {} block in JavaScript.
*/
console.table([accountId, accountEmail, accountPassword, accountCity])