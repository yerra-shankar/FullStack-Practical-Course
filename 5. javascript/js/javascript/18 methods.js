/*
 -> Methods
 -> methods creation and using

  Methods:-

   methods are functions that are stored as object properties.
     synatx:-
            create an object method :
            methodName = function () {code lines}

            Access an object method:
            objectName.methodName()

    A method is a function, belonging to an object. it can be referenced using the this keyword.
    The this keyword is used as a reference to the current object, meaning that you can access the objects
    properties and methods using it.
*/

var person={name:"shankar", age:22, changename: function cn(a){this.name=a; console.log("func call")}};
console.log("before method call")
console.log(person.name);
console.log("after method call")
person.changename("saketh");
console.log(person.name);


/*
 Method define :
       defining methods is done inside the constructor functions.
        
       example:-
               function person(name,age){
                this.name=name;
                this.age=age;
                this.changeName=function(name){
                }
               }
                var p = new person("david", 21);
                p.changename("john");
                document.write(p.name);
*/
function persons(name,age){
    this.name=name;
    this.age=age;
    this.changename=function cn(name){
        this.name=name;
    }
}
var p1=new persons("santhu",10)
console.log(p1.name,p1.age)
console.log("before method call")
console.log(p1.name)
console.log("after method call")
p1.changename("aswini");
console.log(p1.name)


/*
 Methods define :-
    You can aslo define the function outside of the constructor function and associate it with the object.
    example:-
              function person (name, age){
              this.name=name
              this.age=age
              this.yearofbirth=bornyear;
               }

               function bornyear(){
               return 2016-this.age;
               }

        the this keyword is used to access the age property of the object, which is going to call the
        method.
        note:-it's not necessary to write the function's parentheses when assigning it to an object.
*/
function Student(name,age){
    this.name=name;
    this.age=age;
    this.changename= Cn;
}

function Cn(name){
    this.name=name;
}
var p1=new Student("virat", 18);
console.log(p1.name, p1.age);
console.log("before method call");
console.log(p1.name);
console.log("after method call");
p1.changename("rohit sharma");
console.log(p1.name)


/*
   Method call :
        call the method by the property name you specified in the constructor function, rather than
        the function name.
    
    example:-
        var p=new person("A,22");
        console.log(p.yearofbirth());
*/

function funcnname (name,age)
{
    this.name=name;
    this.age=age;
    this.yob=yob;
}

function yob(){
    return 2025-this.age;
}

var p1=new funcnname("shankar",22)
console.log(p1.name+ p1.age);
console.log("before method call");
console.log(p1.age)
console.log("after method call");
console.log(p1.yob())
console.log(p1.age) 
