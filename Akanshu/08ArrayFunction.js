let name="akanshu";
let names=["akanshu", "rahul", "sachin", "rohit", "virat"];


//functions in array
console.log(names.length)

// to add element in array
names.push("dhoni");
console.log(names);

// to remove element from array
names.pop();
console.log(names);

// to add element in starting of array
names.unshift("dhoni");
console.log(names);

// to remove element from starting of array
names.shift();
console.log(names);

//index of element in array
console.log(names.indexOf("sachin"));
// to check element is present in array or not
console.log(names.includes("sachin"));

//slicing
//console.log(arr.slice(0,4))

//        0 1 2 3
let arr2=[1,2,4,5,6,7,8,9,10]
arr2.splice(4,3,11111,11234)
//splice method is used to add or remove element from the array
console.log(arr2) // remove element from index 0 to 3

//arr2.splice(4,1)
//console.log(arr2)

//arr2.splice(2,0)

