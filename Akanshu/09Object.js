let names= {
name1: "akanshu",
name2: "rahul",
name3: "sachin",
name4: "rohit",
name5: "virat"

}

names.name1="Aishwarya"

names.name6=12
console.log(names["name1"])
console.log(names.name6)

let bioData={

names: ["akanshu","rahul","sachin","rohit","virat"],  
lastname:[" kumar","singh","yadav","sharma","gupta"],
ages: [ 21,22,23,24,25],
pincodes: [ 110001,  110003, 110004, 110005,110002],
}

console.log(bioData.pincodes[2]);
let fullname=["akanshu","asim","sachin","rohit","virat","aishwarya","nikhil","arabhya"]
//console.log(fullname.indexOf("asim"))
console.log(bioData.pincodes.at(3));
console.log(bioData["pincodes"][2]);

let newPincodes=bioData.pincodes;
console.log(newPincodes[5])





