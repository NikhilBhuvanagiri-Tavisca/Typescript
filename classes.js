"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastname) {
        this.firstName = firstName;
        this.lastName = lastname;
    }
    //public/private/protected
    // constructor(private firstName:string, private lastName:string){
    // }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.greet = function () {
        console.log("Hey there!");
    };
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
//var aPerson=new Person("Nikhil","Bhuvanagiri");
//aPerson.firstName='Nikhil';
//aPerson.LastName='Bhuvanagiri';
//console.log(aPerson.firstName);
//console.log(aPerson.getFullName());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello World!!");
    };
    Programmer.prototype.GreetLikeNormalPerson = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer("test", "test");
aProgrammer.greet();
//aProgrammer.GreetLikeNormalPerson();
var People = /** @class */ (function () {
    //Type 1: readonly name ="Test";
    //Type 2: readonly name;
    // constructor(name:string){
    //     this.name=name;
    // }
    //Type 3:
    function People(name) {
        this.name = name;
    }
    return People;
}());
var aPeople = new People("Test");
console.log(aPeople.name);
