/*
javascript Inheritance

Inheritance is a method through which the objects inherit the properties and the methods from the other objects. with
the use of this, we can reuse the code and structuring of the relationship between the objecta and we can create the
hierarchy where a child object can access the properties and features of parent objects.\

In simple words, we use inheritance for passiing down the characteristics from parent to child so that new code can
be reused and built upon the feature  of an existing one.

javascript inheritance is a mechanism that allows us to create new classes based on already existing classes. it 
allows the child class to reuse the methods and variable of a parent class.

Te javscript extends keyword is used to create a child class based on a parent class. it facilitates the child 
class to acquire all the properties and behavior of its parent class.


    There are many ways to achieve inheritance in javascript Such as;
    1. prototype inheritance
    2. classical innheritance
    3. Functional inheritance



    1. prototype Inheritance
    When an object inherits the prototype of other objects. we can inherit methods and properties from that prototype
    because each object has a prototype. we can achieve the prototypal inheritance in javascript as folloe
*/
function Animal(name){
    this.name = name;
}
Animal.prototype.sound= function(){
    console.log("Generic Sound")
};

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.sound = function() {
    console.log("woof! woof!");
}
const myDog = new Dog ("Buddy", "Pitbull")
myDog.sound();


// Classical Inheritance 
// ECMAScript 6 introduced the class keyword for classical inheritance, using an apprach similar to java and c++.
// Let explore how classical inheritance can be achieved in javascript

class automobile {
    constructor(name, cc) {
        this.name = name
        this.cc = cc;
    }
    engine(){
        console.log(`${this.name} has ${this.cc} engine`)
    }
}

class car extends automobile{
    engine() {
        console.log(this.name,"has",this.cc, "cc engine")
    }
}
let cars = new car ('supra',"1998")
cars.engine()



/*
Functional Inheritance
In javscript, object can inherit the properties and methods of other objects with the use of function constructors.
We can use the function to create and we can establish relationships between them. Lets see how we can achieve 
functional inheritance in javascript as follow:

constructor overriding
When we extend the class in javascript we might want to override the constructor with the use of super keyword which
will invoke the parent constructor.
*/
function Animal(name){
    const obj = {};
    obj.name = name;

    obj.sound = function(){
        console.log("Some generic sound")
    };
    return obj;
}
function Cat(name, breed){
    const obj = Animal(name);
    obj.breed = breed;

    obj.sound = function(){
        console.log("Meow Meow!")
    }
    return obj;
}
const myCat = Cat("Buddy","Labrador")
myCat.sound();