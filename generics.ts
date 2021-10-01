import {Person} from "./classes";
// function Echo(arg:any):any{
//     return arg;
// }
function Echo<T>(arg:T):T{
    return arg;
}
var fo=Echo(1);



class Admin extends Person{
}
class Manager extends Person{
}

var admin=new Admin("a", "b");
var manager=new Manager("c","d");

function personEcho<T extends Person>(person:T):T{
    return person;
}

var fooo=personEcho(admin);
var bar=personEcho(manager);

