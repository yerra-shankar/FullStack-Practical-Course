/*
  JavaScript Constructor Method 

  A javascript constructor method is a special type of method which is used to initialize and create an object. it 
  is called when memory is allocated for an Object.

  Points to remember

  * The constructor keyword is used to declare a constructor method.
  * The class can contain one constructor method only.
  * javascript allows us to use parent class constructor through super keyword.


  constructor method example
*/
class Employee {
    constructor(){
        this.id = 101;
        this.name = "martin Roy"
    }
}
var emp = new Employee()
console.log(emp.id+" "+emp.name)



//constructor Method keyword : super Keyword

class CompanyName{
    constructor(){
        this.company = "javascript"
    }
}
class Employee1 extends CompanyName{
    constructor(id,name){
        super()
        this.id = id;
        this.name =name;
    }
}
var emp = new Employee1(1,"shankar")
console.log(emp.id+" "+emp.name+" "+emp.company)


// Note:- if we didn't specify any constructor method, javascript use default constructor method.