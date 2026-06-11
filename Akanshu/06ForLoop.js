

for(let i=1; i<100;i++){

    if(i%2==0 && i==98){

console.log(i + " "+ " is even number");

    }

}


// prime number;

for( let i=2;i<=100;i++){

let isprime=true;
for(j=2;j<=i;j++){

if(i%j==0){

isprime=false;
break;
}

}
if( isprime==true){

console.log(i + " "+ " is prime number");
}}