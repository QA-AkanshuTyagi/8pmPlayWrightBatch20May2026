class p1
{ 
    public method1(): void
    {
      console.log('This is parent method')
    }

}

class c1
{  
    
    public cmethod1(): void
    { 
       const p = new p1();
       p.method1();
       console.log('This is child method')
    }
  
}
const c = new c1();
c.cmethod1();


//Using Extend Keyword

class c2 extends p1
{
    public c2method(): void
    {
      console.log('Accessing parent non static method using Extend keyword ');
    }

}
const cc = new c2();
cc.c2method();
cc.method1();
