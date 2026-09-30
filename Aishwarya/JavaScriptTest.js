//non-primitive
let name = ['Aishwarya', 'Anshul'];
name[0] = 'ABC';
console.log(name) ;

//primitive 
let a = 10; 
    a = 20;
 console.log(a) ;

 console.log(typeof null);  // object 
 console.log(typeof undefined); 
 console.log(typeof []); 
//************************
//keywords Scope
var p = 10; 
 var  p = 10;
 var p = 20;
 console.log(p) ;

let q = 10; 
  q = 10;
   q = 20;
 console.log(q) ;


var d =10;
let e = 'abc';
const f = 3.23;

if(true)
{
   var x =10;
    let y = 'abc';
   const z = 3.23;
  
console.log(d);
console.log(e);
console.log(f);

console.log(x);
console.log(y);
console.log(z);

}
console.log(d);
console.log(e);
console.log(f);

console.log(x);
//console.log(y);
//console.log(z);
//********************************** */
//Temporal dead Zone
//console.log(name1);

//let name1 = "Aishwarya";


for (let i = 1; i <= 5; i++) {
    if (i === 1) continue;
    console.log(i);
}

//*************************************** */
//Operations

var r = 10;
 var i = 10;
console.log(r!=i);
console.log(r!==i);

console.log(5!=="5");

//Program to check positive or negative number
var num = 10;
                if(num >0)
                { console.log (num+ " is positive number."); }
               else if (num<0)
                { console.log (num+ " is negative number."); }
               else if (num == 0)
                  { console.log (num+ " is Zero number."); }

//Program to check even or odd number               

var num = 27;
   if( num%2 == 0 )
 { console.log (num+ " is a even no.");  }
else
{ console.log (num+ " is a odd no.");  }

// program to check largest number among three numbers
var num1 = "20";
var num2 = "40";
 var num3 = "60";
 if(num1>num2 && num1>num3)
   { console.log (num1+ " is a largest no.");  }
else if (num2>num1 && num2>num3)
  { console.log (num2+ " is a largest no.");  }
 else { console.log (num3+ " is a largest no.");  }

 //program to calculate grade of student based on marks
 var marks = 78;
   if( marks >= 90)
   { console.log ("O grade"); }
  else if( marks >= 80 && marks <=90)
  { console.log ("A+ grade"); }
 else if( marks >= 70 && marks <=80)
   { console.log ("A grade"); }
else if( marks >= 60 && marks <=70)
   { console.log ("B grade"); }
 else if( marks >= 50 && marks <=60)
  { console.log ("C grade"); }
 else if( marks >= 35 && marks <=50)
 { console.log ("Pass grade"); }
  else    { console.log ("fail grade"); }



  //break and continue statement
  for ( var i = 1; i<=5; i++) 
  {   if(i==2)    
  { continue;  }
 console.log(i); 
    }

for ( var i = 1; i<=5; i++) 
  {   if(i==2)    
  { break;  }
 console.log(i); 
    }

    for ( var i = 1; i<=10; i++) 
   {  console.log(i);    }


// even no from 1 to 10
for ( var i = 1; i<=10; i++) 
 { if(i%2==0)
 {console.log(i);    }
  }


// odd no from 1 to 10
 for ( var i = 1; i<=10; i++) 
  { if(i%2==1)
 {console.log(i);    }
  }

//program to print table of 5
for ( var i = 1; i<=10; i++) 
   {   result = i*5;   
  console.log(result);  
   }


// sum of 1 to 100 numberes
var  result = 0;
for ( var i = 1; i<=100; i++) 
{   result = result+i;  }
 console.log(result);  

 // reverse of number
var rev =0;
var num = 12345
while(num>0)
  {   var num1 = num%10;
    rev = rev*10+num1;
 //   num = (num/10)|0;    //this will remove decimal part of number
    num = Math.floor(num/10);  //this will remove decimal part of number
 }
  console.log(rev);  

  // multiple values return in function 
function print()
 {    return [1,2,3];
  }
 let b = print();
 console.log(b);
 console.log(b[0]);

 // even odd function 
 function even_odd (num)
  {
  if(num%2==0)
    {  console.log(num+ " is even no");
   }
 else
 {  console.log(num+ "  is odd no");
 }
  }
 even_odd(10);

 //large no in function
 // even odd function 
 function large (num1,num2)
  {
  if(num1>num2)
    {  console.log(num1+ " is large no");
   }
 else
 {  console.log(num2+ "  is large no");
 }
  }
 large(10,20);

 //  Parameterized arrow function:     
   const add2 = (a,b) => { return a+b;}
   console.log(add2(2,3));
// Non -Parameterized arrow function:   
const add1 = () => { console.log("Hello"); }
 add1();

 //implicit return arrow function:
 const print1 =()=>console.log("Hello");
  print1();


  //Object
  let details = {
  name:  "Aishwarya",
 age: 30,
  place: "rajnagar extension" }
 console.log(details)
  console.log(details.name);
  console.log(details['name']);


// delete add operations on object
let details1 = {
  name:  "Aishwarya",
 age: 30,
  place: "rajnagar extension"
 }
  details1.city = "Indore";
  console.log(details1);

  details1['phno']= 7890654321;
  console.log(details1);
  delete details1.age;
  console.log(details1);
  // check peropert is exist or not 
  console.log("age" in details1);
  console.log(details1.hasOwnProperty("name"));


//shift and unshift operation on object
 let num4 = [1,2,3,4];
num4.shift(); 
console.log(num4);     // [2,3,4]
 num4.unshift(5);  
console.log(num4);// [5,2,3,4]

//slice and splice
  let names3 = ["Aishu" , "Mayur" , "Varsha", "Anil"];
//console.log(names.slice(1,2));
names3.splice(1,0,"new");
console.log(names3);


//map() , filter() and reduce() method
 let num6 = [1,2,3,4,5];
 let result1 = num6.map(num6=>num6+1);
console.log(result1);
  let result2 = num6.filter(num6=>num6>3);
console.log(result2);

//foreach() 
let num7 =[1,2,3];
num7.forEach(num1 => { console.log (num1*2);} );

//remove duplicate elment from array 

let num8 =[1,2,3,4,4,5,6,5];
let result3 = [...new Set(num8)];
console.log(result3);  

//large no from array
let num9 = [1,2,3,4,5];
  var large = num9[0];
  for (let i = 1; i<num9.length ; i++)
   {   if(num9[i]>num9[0])
     {  large = num9[i];
      }
        }
  console.log(large);


  //second largest no from array
  let num10 = [1,2,3,4,5];
  var large = num10[0];
  var second = num10[0];
  for (let i = 1; i<num10.length ; i++)
    {   if(num10[i]>large)
{   
     second = large;
  large = num10[i];
                                
    }
else if (num10[i]>second && num10[i] !== large)
 {  second = num10[i];} 

 }
  
  console.log(second);


  //

console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise");
});
console.log("End");