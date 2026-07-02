function display()
{
console.log("Hello World");
}
display();

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


