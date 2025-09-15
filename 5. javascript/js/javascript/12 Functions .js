 /*
   Function:

--> A function is a set of statements that take inputs,do some specific computation and produce output.
--> The idea is to put some commonly or repeatedly done tasks together and make a function so that instead 
    of writing the same code again and again for different inputs, we can call that function.

    function rules:
    --> Every function should begin with the keyword function.
    --> Followed by, a user-defined function name that should   be unique.
    --> A list of parameters enclosed within parentheses and separated  by commas.
    --> A list of statement composing the body of the function enclosed within curly braces{}.

    function Creation :
    --->To create a function in javascript, we have to first use the keyword function,separated by name
         of the function and parameters within parenthesis.
    ---> The part of the function inside the curly braces {} is the body of the function.

    synatx:-
                function name(parameter1,parameter2,parameter3)
                {*
                //code to be executed
                }
*/
 
function first()
{
    console.log("this is function")
}


/*
   Function Call :
    ---> After defining a function, the next step is to call them to make use of the function.
    ---> We can call a function by using the function name separated by the value of parameter enclosed 
         between the parenthesis and a semicolon at the end.

    synatx : 
          functionName(value1,value2,..)
*/

function second()
{
    console.log("this is an first example func")
}
second();

// add parameters
function fnn(a,b)
{
    console.log("this is an second example func",a,b)
    console.log("example of paramters"+a)     //concat
}
fnn(18,45);


// example of addition
function fnnn(c,d)
{
    console.log("this is an third example func"+ (c+d))
}
fnnn(3,7);


/*
  Function Return:
--->  There are some situations when we want to return some values from a function after performing some 
    operations.
--->  In such case, we can make use of the return statement in javascript.
---> when javascript reaches a return statement, the function will stop executing.
---> This is an optional statement and most of the time the last statement in a javascript function.
---> Functions often compute a return value. The return value is "returned" back to the caller.

synatx:-
    return value;
*/

// example of two no's


function robo()
{
   var x, y ;
   x = 100;
   y = 200;
   return x+y;
}
robo()
var result=robo();
console.log("this is an example of return statement"+result)

// if u print directly
console.log("this is an example of return statement"+robo())
console.log("this is an example of return statement",robo())


// adding parameters

function para(x, y)
{
    var a,b;
    a = x;
    b = y
    return a+b;
}
var n1, n2;           // or we use  var result= para(400,200)
   n1 = 400;          
   n2 = 200;
var result=para(n1,n2)
console.log("this is an example of adding parameters"+result)





//  function inside an object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return 'Arjun Reddy';
    }
}
console.log(student)
console.log(student.fullName())




// Nested function
let outerFn = function()  {
    console.log('Iam an Outer Function');
    let innerFn = function() {
        console.log('Iam an Inner Function')
    };
    innerFn();
}
outerFn()



// Twisted Function 
let twistedFn = function() {
    let name = 'john';
    let printstudent = function() {
        let student = {
            name : 'Rajan',
            age : 20,
            course : 'CSE' 
        };
        return student ;
    };
    return printstudent;
};

let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj)
console.log(studentObj.name)


