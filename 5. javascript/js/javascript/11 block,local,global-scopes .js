/*
   Scope:

        Scope determines the accessibility (visiblle) of variable.
        in computer programming, the scope of a name binding is the part of a program where the name 
        binding is valid; that is, where the name can be used to refer to the entity.

        javascript has 3 types of scope:
           ---> block scope
           ---> global scope
           ---> function/local scope

1. Block scope:-
--> Before ES6 (2015), javascript had only Global scope and function scope.
--> ES6 introduced two important new javascript keywords: let and const.
--> these two keywords provide block scope in javascript.
--> variables declared iside a {} block cannot be accessed from outside the block.
--> variables declared with the var keyword can NOT have block scope.
--> variables declared inside a {} block can be accessed from outside the block.

example:-
     {
      let x=2;
     }
    //x can not be used here

    {
    var x=2
    }
    //x can be used here
*/
/*
a=8
if(a>3)
{
    console.log("in")
    let b=20               //not worked
}
console.log(b)

*/
a=8
if(a>3)
{
    console.log("in")
    let b=20             // worked because private/protected keyword
    console.log(b)
}




/*
  local/function scope:
--> Variables declared within a javascript function , become local to the function.
--> when you use javascript, local variables are variables that are defined within functions.
--> they have local scope, which means that they can only be used wthin the functions that define them.
--> since local variables are only recongnized inside their functions, variables with the same name can 
     be used in different functions.
--> local variables are created when a functions starts, and deleted when the functions is completed.
--> Accessing them outside the function will throw an error

example:
    //  code here can not use carname
     
    function myfunction() {
    let carName ="Volvo";
    // code here can use carname
    }

    //code here can not use carname
*/
/*
function fn()
{
    var c=10;     // func not worked
}
fn()
console.log(c)
*/

function fn()
{
    var b=10;
    console.log(b)
}
fn()


// different funcs

function fnn()
{
    a=23;                          //global variable
    console.log("in side the function"+a)
}

function fnnn()
{
    var a= 50;
    console.log("2nd func value"+a)
}
fnn()
fnnn()
console.log("out side a value"+a);   // output 23 because of first function is global variable.



/*
    Global Scope
---> A variable declared outside a function , becomes Global.
---> Variable declared Globally(outside any function) have global scope.
---> Global variables can be accessed from anywhere in a javascript program.
---> Variable declared with var, let and const are quite similar when declared outside a block.
---> *A variable declared without a keyword is also considered global even though it is declared in the
     function. 
*/
/*
function func()
{
    var d = 10;        // not worked
}
fn()
console.log("out side fnc"+d)
*/
function func()
{
    cd=90;      //global variable 
}
func()
console.log("out the func"+cd)



var a=50;
function f()
{
    console.log("inner func"+a)
}
f()
console.log("outside the func"+a)