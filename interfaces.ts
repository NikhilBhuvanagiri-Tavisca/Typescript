interface Persons{
    firstName: string;
    lastName:string;
    getFullName():string;
}


class Foo implements Persons{

    firstName: string;
    lastName: string;
    constructor(firstName:string, lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName(): string {
       return this.firstName+this.lastName;
    }
}

var aPersons:Persons=new Foo("a","b");

//Duck Typing
let someObj={
    firstName:"Test",
    lastName:"Test",
    foo:10,
    getFullName:()=>"Test"
};
aPersons=someObj;

