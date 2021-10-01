export class Person{
    public firstName:string;
    public lastName:string;
    constructor(firstName:string, lastname:string){
        this.firstName=firstName;
        this.lastName=lastname;
    }
    //public/private/protected
    // constructor(private firstName:string, private lastName:string){
        
    // }

    getFirstName(){
        return this.firstName;
    }
    setFirstName(firstName:string){
        this.firstName=firstName;
    }
    getLastName(){
        return this.lastName;
    }
    setLastName(lastName:string){
        this.lastName=lastName;
    }
    greet(){
        console.log("Hey there!");
    }
    getFullName(){
        return this.firstName+" "+this.lastName;
    }
}
//var aPerson=new Person("Nikhil","Bhuvanagiri");
//aPerson.firstName='Nikhil';
//aPerson.LastName='Bhuvanagiri';
//console.log(aPerson.firstName);
//console.log(aPerson.getFullName());

class Programmer extends Person{
    greet(){
        console.log("Hello World!!");
    }
    GreetLikeNormalPerson(){
        super.greet();
    }
    
}

var aProgrammer:Person=new Programmer("test","test");
aProgrammer.greet();
//aProgrammer.GreetLikeNormalPerson();

class People{
    //Type 1: readonly name ="Test";
    //Type 2: readonly name;
    // constructor(name:string){
    //     this.name=name;
    // }
    //Type 3:
    constructor (readonly name:string){
    }
}

var aPeople=new People("Test");
console.log(aPeople.name)

