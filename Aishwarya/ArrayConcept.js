let names = ["Aishu" , "Mayur" , "Varsha", "Anil"];
console.log(names[2]);
console.log(names.length);

console.log(names[1]+","+names[3]);

names.push("Aru");
console.log(names);

names.pop();
console.log(names);
names.unshift("Aru");
console.log(names)

names.shift();
console.log(names);

names.splice(2,0,"Rohit");  // 2nd index se start hoke 0 element delete karke "Rohit" add kar dega
console.log(names);

names.splice(1,1);
console.log(names);

names.splice(2,0,"121");  // 2nd index se start hoke 0 element delete karke "Rohit" add kar dega
console.log(names);


console.log(names.indexOf("Rohit"));
console.log(names.includes("Ram"));
console.log(names.includes("Aishu"));


