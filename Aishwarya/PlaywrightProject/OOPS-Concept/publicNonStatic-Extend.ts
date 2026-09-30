class parent1
{
   public parent1Method(): void
   {
      console.log("This is parent1 method");
   }
}

class child1 extends parent1
{
    public child1Method(): void
    {
        console.log("This is child1 method");
    }
}

const ch1 = new child1();
ch1.child1Method();
ch1.parent1Method();




class child2
{
    public child2Method(): void
    {
        const p1 = new parent1();
        p1.parent1Method();
        console.log("This is child2 method");
    }
}

const ch2 = new child2();
ch2.child2Method();







