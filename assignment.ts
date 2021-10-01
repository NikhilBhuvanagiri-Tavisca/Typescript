/**2.2 - . Write a function that accept parameter as number 
 * and if the parameter is not null or undefined it will return the number else return*/
function fullDetails(input:number) {
    if (input != null || input===undefined){
        return input;
    }else{
        return -1;
    }
    
}
console.log(fullDetails(2));

/**2.3Write a typescript program that will accept name as string, age as number and isAutomatedBefore as boolean and return as 
"My name is `${name}1. I am `${age}` years old. I have done/not done automation before" based on isAutomatedBefore is true or false */

function checks(name:string,age:number,isAutomatedBefore:boolean)
{
if(isAutomatedBefore == true)
return "My name is " + name +". I am "+age +" years old. I have done automation before"
else
return "My name is " + name +". I am "+age +" years old. I have not done automation before"
}

console.log(checks("Nikhil",24,true));

/**2.4 Write a Typescript program to calculate the sum of first n numbers.If n=5, output will be 1+2+3+4+5=15 */
function summation(n:number)
{
    return n*(n+1)/2;
}

console.log(summation(8));

/** Write a Typescript program that will accept an integer array and return an array where all items are incremented by 1.
For example if input array is [1,2,3,4,5,] output should be [2,3,4,5,6] */

function incrementArr(numArr : number[])
{
    for(let i=0;i<numArr.length;i++)
    {
        numArr[i]=numArr[i]+1;
    }
return numArr;
}

console.log(incrementArr([1,2,3,4,5]));


/**Write a typescript function that may accept first and last name or first name, middle name and last name and return full name.
Ex myFullName('Anand', ;Prasad') //output "Anand Prasad"myFullName('Anand', 'Kumar', 'Prasad')//output "Anand Kumar Prasad" */

function myFullName(firstName:string, lastName:string, middleName?:string){
    if(middleName===undefined){
        return firstName+lastName;
    }else{
        return firstName+middleName+lastName;
    }
}

console.log(myFullName("Nikhil","Bhuvanagiri"));

/**Create a class it will have two overloaded methods add. One method will take two string parameters and return string concatenated string
Another overloaded method will accept two numbers and return sum of the two numbers.
Create object of the class and call these overloaded methods and verify the output. */

class sum{
    
    getsum(arg1:number,arg2:number){
        return arg1+arg2;
    }
    getsum(arg1:string, arg2:string){
        return arg1+arg2;
    }
}
var sum1=new sum();
console.log(sum1.getsum("Hello","World"));
console.log(sum1.getsum(2,3));

/**Calculate area of all the shapes including circle, square , rectangle using interfaces and classes */
interface Shapes{
    
    calculateArea(shape:string,n1:number,n2?:number):number
}

class AllShapes implements Shapes{
    calculateArea(shape:string,n1:number,n2?:number){
        if(shape === "circle"){
            return 3.14*n1*n1;
        }else if(shape === "square"){
            return n1*n1;
        }else if(shape === "rectangle"){
            return n1*n2;
        }else
            return -1;
    }
}

var abc=new AllShapes();

console.log(abc.calculateArea("circle",2));
console.log(abc.calculateArea("square",2));
console.log(abc.calculateArea("rectangle",2,4));

/**2.11 - Write a class containing member variables and methods with access modifier private, protected and public. 
Also add read-only variables.Create instance of that class and print the values of all those variables. Use access specifier concept. */

class Vehicle{
    constructor(public model:any, private price:number, protected colour:string, readonly milege:number){
    }
    public printModel(){
        return this.model;
    }
    public getPrice(){
        return this.price;
    }
    public setPrice(price:number){
        this.price=price;
    }

    protected printColour(){
        return this.colour;
    }
    
}

class Car extends Vehicle{
    public printColour(){
        return this.colour;
    }
}
var bmw=new Car("sx4", 80000,"black",20);
bmw.printModel();
bmw.getPrice();
bmw.printColour();
console.log(bmw.milege);

/** 2.7 - Write a method that will accept enum tripType and return string as triptype selectedmethod call 
 * selectTripType(tripType.OneWay)output "TripType selected as OneWay" */

 enum tripType{
    "oneWay","roundTrip"
}

var a=tripType.oneWay;

if(a == tripType.oneWay)
{
    console.log("tripType selected as OneWay");
}
else
{
    console.log("tripType selected as roundTrip");
}

console.log(a);

/** 2.9 - Write a generic method which will take one parameter and return this */

function Generic <T>(input:T):T{
    return input;
}
var G1=Generic(1);