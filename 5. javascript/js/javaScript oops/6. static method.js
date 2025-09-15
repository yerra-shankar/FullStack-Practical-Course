/*
  javascript static method 

   In javascript a static method defines a class using static keywords. These types of methods are slightly different 
   than a usual javascript method.

   In javascript we cannot access the static method by any of the instantiated objects of the class. we need to use 
   the class name to access the static method because it directly belongs to the class.

   syntax:-

   class chat{
     sendMessage(){
     return "Arigato Gozaimasu(Thank yoy)"
     }
   }
*/

class square{
    constructor(side){
        this.side = side;
    }
    findPerimeter(){
        return 4*this.side;
    }
    static comaparePerimeter(squarea,squareb) {
        if(squarea.side > squareb.side){
            console.log("first square has more perimeter")
        }
        else if(squarea.side < squareb.side){
            console.log("second square has more perimeter");
        }
        else{
            console.log("both hava equal perimeter")
        }
    }
}
let squarea = new square(4)
let squareb = new square(5)

square.comaparePerimeter(squarea,squareb)


//example
class user{
    static heymail = "yerrashankar9392@gmail.com";
    static checkValidMail(email){
        console.log("Email is valid")
    }

    static loginheymail(){
        this.checkValidMail(this.heymail)
    }
}
user.loginheymail()




// example 3

class Person{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    print(){
        console.log(this.name,this.email)
    }

    static create(str){
        let person = JSON.parse(str);
        return new Person(person.name, person.email);
    }
}

let str = '{"name":"shankar","email":"yerrashankar9392@gmail.com"}';

let p1 = Person.create(str);
console.log(p1);