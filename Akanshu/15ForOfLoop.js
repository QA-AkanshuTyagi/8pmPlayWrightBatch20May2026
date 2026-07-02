let names=["akanshu","nikhil","arabhya","aishwarya","nikita"  ]
//1st method: standard for loop
for(let i=0; i<=names.length-1;i++){

console.log(names[i])   


}

//2nd method:for of loop
console.log("===============================================================")

for(let name of names){

console.log(name)



}


console.log("==============================================")
//3rd method : for in loop

let userdetails={

name: "nikita",
age: 28


}



for(let detail in userdetails){

console.log(detail,userdetails[detail])

}

console.log("===================================================")
console.log(userdetails["name"])