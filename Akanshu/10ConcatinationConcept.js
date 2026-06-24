let firstname="akanshu"
let lastName="Tyagi"

let fullName=firstname.concat(lastName);

console.log(firstname.concat(lastName).concat(fullName).concat("hello how are you ")) //akanshuTyagi

//  2ndMethod: console.log(firstname+ "-"+lastName) //akanshuTyagi
// 3rdMethod: console.log(firstname, " ",lastName,fullName) //akanshuTyagi
// 4th Method: console.log(`${firstname} ${lastName}`) //akanshuTyagi
console.log(`${firstname} ${lastName}    ${"hello guys"}  ${fullName}`)