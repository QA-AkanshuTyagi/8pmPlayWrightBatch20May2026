let fname:String = "Aishwarya";
console.log(fname);

var age:number = 22;
console.log(age);

const isStudent: boolean = true;
console.log(isStudent);

let isHuman:boolean;   // Declaration
isHuman = true;          // Initialization
console.log(isHuman);

console.log("********** Loop **************");

for (let i : number = 0; i<10; i++)
{
    console.log(i);
}

console.log("*********** Array *************");

let arr1:String[] = ["Aishwarya", "Akanshu", "Rohit"];
for (let i: number = 0; i<arr1.length;i++)
{
    console.log(arr1[i]);
}

console.log("********** Object **************");


let details:{name: string, age: Number, place: String} =
{
    name: "Aishwarya",
    age: 30,
    place: "Rajnagar Extension"

}
console.log("********** Function **************");

function print(a:number,b:number)
{
    console.log(a+b);
}
print(2,3);

console.log("*********** Arrow Function *************");

const display =(name:string)=>
{
   console.log(name);
}
display("Aishwarya")