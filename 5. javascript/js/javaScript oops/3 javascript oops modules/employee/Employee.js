import {Person} from '../persons/Person.js'

export class Employee extends Person {
    constructor(firstName,lastName, age, designation){
        super(firstName, lastName);
        this.age=age;
        this.designation=designation;
    }
    getAge(){
        return this.age;
    }
    getDesignation(){
        return this.designation;
    }
    greet(){
        let msg = `Hello mr: ${this.getFirstName()} ${this.getLastName()}
                   Age: ${this.getAge()}
                   Designation: ${this.getDesignation()}` 
            console.log(msg);
    }
}