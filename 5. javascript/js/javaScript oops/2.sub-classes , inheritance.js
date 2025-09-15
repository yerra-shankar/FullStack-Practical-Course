/*
ex:-
parent class=====person
child class=====Employee

    (super)-----> super keyword was use to call the parent class constructor to child constructor
*/

class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    greet(){
        let msg = `Welcome Mr: ${this.getFirstName()} ${this.getLastName()}`;
        console.log(msg);
    }
}// let person = new Person('shankar','yerra')     //i dont want just example for value
// person.greet();
class Employee extends Person {
    constructor(firstName, lastName, age, designation){
        super(firstName, lastName);
        this.age = age;
        this.designation = designation;
    }

    getAge() {
        return this.age;
    }
    getDesignation(){
        return this.designation;
    }
    greet() {
        let msg  =`Hello Mr: ${this.getFirstName()} ${this.getLastName()}
                   Age : ${this.getAge()}
                   DESIGNATION : ${this.getDesignation()}`;
    console.log(msg);
    }
    
}
let employee = new Employee('shankar','yerra',22,'software developer');
employee.greet();


// another class with also extends from parent class(person)
class Customer extends Person{
    constructor(firstName, lastName, age, location) {
        super(firstName,lastName);
        this.age = age;
        this.location = location;
    }
    getAge() {
        return this.age;
    }
    getLocation(){
        return this.location;
    }
    greet(){
        let msg = `Hello Mr: ${this.getFirstName()} ${this.getLastName()}
                   Age : ${this.getAge()}
                   Location : ${this.getLocation()}`;
        console.log(msg)
    }
}
let customer = new Customer('saketh','yerra',1,'andhra pradesh');
customer.greet()


// this is called sub-classes and also method overriding concept of javascript
