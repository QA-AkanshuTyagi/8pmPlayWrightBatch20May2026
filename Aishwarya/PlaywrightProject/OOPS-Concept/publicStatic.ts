class parent11
{
    public static parentMethod11() : void
    {
        console.log('This is public static method');

    }
}

class child11
{
    public  childMethod11() : void
    { 
         console.log('This is child method');
        
    }
     
}

const c11 = new child11();
c11.childMethod11();
parent11.parentMethod11()


// Using Extend keyword

class child12 extends parent11
{
   public childMethod12():void
   {
      console.log('Accessing parent static method using Extend keyword ');
   }
}

const c12 = new child12();
c12.childMethod12();
parent11.parentMethod11();
