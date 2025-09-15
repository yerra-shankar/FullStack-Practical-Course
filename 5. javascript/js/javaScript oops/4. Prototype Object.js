/*
 JavaScript Prototype Object

 javascript is a prototype-based language that facilitates the objects to acquire properties and features from one another.
 Here each object contains a prototype object.

 In javascript, Whenever a function is created the prototype property is added to that function automatically. This
 property is a prototype object that holds a constructor property.

 Syntax:-
     ClassName.prototype.methodName

*/
function Employee(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Employee.prototype.fullName = function(){
    return this.firstName+" "+this.lastName;
}

var employee1 = new Employee("Shankar","Yerra");
var employee2 = new Employee("Saketh","Yerra");
console.log(employee1.fullName())
console.log(employee2.fullName())



//adding a new property to the constructor function

function Employee(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Employee.prototype.company="Tpoint-Tech"

var employee1 = new Employee("siva", "yerra")
var employee2 = new Employee("santhosh", "yerra")
console.log(employee1.firstName+" "+employee1.lastName+" "+employee1.company)
console.log(employee2.firstName+" "+employee2.lastName+" "+employee2.company)
