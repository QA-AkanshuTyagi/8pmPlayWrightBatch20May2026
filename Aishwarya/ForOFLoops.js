let names =
["akanshu","nikhil","arabhya","aishwarya","nikita" ];

for (let i =0; i<=names.length-1; i++)
{
    console.log(names[i]);
}

console.log("========================")  

for (let name of names)
{
    console.log(name);
}
console.log("========================")  

let employeeDetails = 
{
    empID : 101,
    empName : "Aishwarya",
    empAge : 25,
    empSalary : 50000
}

for (let details in employeeDetails)
{
  console.log(details, employeeDetails[details]);  // key and value will be printed
   // console.log(employeeDetails[details]);   // only value will be printed
}