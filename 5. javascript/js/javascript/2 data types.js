/*   Data Types  in javascript

There are two types of data types in javascript
1.primitive data type
2.Non-primitive (reference) data type


1.primitive data types:- (string, number, boolen)

string--->(represents sequence of characters e.g. "hello")
  syntax : var a="hello";
number--->(represents numeric values e.g. 100)
  synatx: var b=100;
boolean--->(represents boolean value either false or true)
  synatx: var c=true;

*/
// using var or let both are data types


var a=10;            // number
let b="javascript"   // string
console.log(a);
console.log(b)
console.log(a+b)
var c=true;
console.log(c)        //boolen

console.log(a+b+c)


/*
2.Non-primitive (reference) data type :- (object,Array,RegExp)

Object---->represents instance through which we can access members.
Array---->represents group of similar values.
RegExp---->represents regular expression.
*/


//object

let TpountTech = {
  type:"company",
  location:"andhra pradesh"
}

console.log(TpountTech.type)
console.log(TpountTech.location)


//Array

var a=[1,2,3,4,5]
console.log(a);
var c=[1, 'two', {name:"object"}, [3,4,5]];
console.log(c)


//function

//defining a function to greet a user
function greet(name) {
  return "Hello," + name + "!";
}
console.log(greet("alice"));



//Data Object
//Creating  a new Data object for the current Date and time 
let currentDate = new Date();
//Displaying the current date  and time 
console.log(currentDate);