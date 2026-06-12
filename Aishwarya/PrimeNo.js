

for (let i = 2; i<=100;i++)
{
    let primeNum = true;
    for (let j =2; j<i ; j++)
    {
        if(i%j==0)
        {
            primeNum = false;
            break;      
    
        }
      
    }
    if(primeNum==true)
    {
        console.log(i + " is a prime number");
    }
}