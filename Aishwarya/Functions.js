let name = "Aishwarya";

function getname()
{
    return name;
}
console.log(getname());


function getname1(name,age)
{
    return name + " "+age;
}
    console.log(getname1("Shruti", 30));



let num1;
let num2;
let add;
function n1(num1)
{
    return num1;
}


function n2(num2)
{
    return num2;
}


function addition()
{
     add = n1(10) + n2(20);
    return add;
}
console.log("Num1: ",n1(10));
console.log("Num2: ",n2(20));
console.log("Addition of Num1 and Num2: ",addition());



function print1(a,b)
{
    console.log(a+b);
}
print1(10,20);

function print2(x,y)
{
    return x+y;
}
console.log(print2(5,5));