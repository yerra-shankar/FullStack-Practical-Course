
export class Person{
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
        let msg =  `welocme Mr: ${this.getFirstName()} ${this.getLastName()}`;
        console.log(msg)
    }
}