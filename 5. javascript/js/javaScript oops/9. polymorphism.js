/*
  Javascript Polymorphism

  The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action
  in different forms. it provides an ability to call the same method on different javascript objects. As javascript 
  is not a type-safe language, we can pass any type of data members with the methods.

  javascript polymorphism 

  
*/
//example 1

class A{
    display(){
        console.log("A is invoked")
    }
}
class B extends A {

}
var b = new B()
b.display()





//example2
// Let's see an example where a child and parent class contains the same method . Here, the object of class invokes both classes method.

class C {
    display(){
        console.log("C is invoked")
    }
}
class D extends C{
    display(){
        console.log("D is invoked")
    }
}

var c = [new C(), new D()]
c.forEach(function(msg){
    msg.display();
})





// Example 3
// Let's see the same example with prototype-based approch.
function E(){

}
E.prototype.display = function(){
    return "E is invoked"
}
function F(){

}
F.prototype=Object.create(E.prototype);
F.prototype.constructor = F

var a =[new E(), new F()]
a.forEach(function(msg){
    console.log(msg.display())
})