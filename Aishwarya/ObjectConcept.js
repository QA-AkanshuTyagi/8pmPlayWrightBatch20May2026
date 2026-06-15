let names = { 101: "Aishwarya", 102: "Rahul", 103: "Shubham", 104: "Ram"}
console.log(names[101]);

names.a = "Ankit";
console.log(names.a);

names[105] = "Satyarth";
console.log(names[105]);

names.a= "11111";
console.log(names.a);
console.log(names);


let bioData = {
    name: ["Aishwarya", "Anshul", "Shubham", "Ram"],
    age: [22, 30, 25, 28],
    city: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
    pincode: [110001, 110002, 110003, 110004]
}

console.log(bioData.name[2]);
console.log(bioData.age[1]);
console.log(bioData.city[3]);