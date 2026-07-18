

const displayArrow =()=>
    {
        console.log("I am inside arrow function");
    }
displayArrow();
    
const addArrow =(a,b)=>
{
    return a+b;
}
console.log(addArrow(10,20));

const performArrow =()=>
{
    let num1= 10;
    let num2= 20;
    let add = num1+num2;
    let multi = num1*num2;
    console.log(add);
    console.log(multi);
}
performArrow();

const mathArrow =(m1,m2)=> m1*m2;
console.log(mathArrow(10,20));

const square =(m1)=> console.log("Square of " + m1 + " is " + m1*m1);
square(4);