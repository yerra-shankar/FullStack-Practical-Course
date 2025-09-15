  /* 
  identifiers

All javascript variables, functions, methods must be identified with unique names.
These unique names are called identifires.

The general rules for constructing names for identifiers are:

--> Names can contain letters, digits, underscores, and dollar signs.
--> Names must begin with a letter.
--> Names can also begin with $ and _  (Not recommended).
--> Names are case sensitive (y and Y are different Variables).
--> Reserved words (Keywords) cannot be used as names.

ex:-
    do's:            donots:
   1.score          1. 8thplayer  
   2.$player1       2. team*
   3.player_2
*/

var score=180;
var $player1="virat";
var player_2="rohit";

// var 8thplayer="dhoni";
// var team*="india";



/*
    Variables:

--> Variables in javascript are containers that hold reusable data.
--> it is the basic unit of storage in a program.
--> the value stored in a variable can be changed during program execution.
--> A variable is only a name given to a memory location, all the operation done on the variable effects that memory location.
--> In javascript, all the variable must be declared before they can be used.
--> Naming Rules for a Variable same as constructing names for identifiers.

variables:
               4 ways to Declare a javascript variable:
              /             |             |             \
          using var    using let     using const      using nothing

          Always declare javascript variables with var, let or const.  (always prefer)

  when to use javascript var and const and let?

--> if you want your code to run in older browsers, you must use var.
-->if you want a general rule : always declare variables with const. constant values and cannot be changed.
-->if you think the value of the variable can change, use let.

  Declaring a javascript Variable :
       synatx:-
             var variable_name; | let variable_name; | const variable_name;

  Initializing a javascript Variable :
        synatx:-
              variable_name = value; | variable_name = value; | const variable_name=value;

 example:-
 var a=10;
 let b="js";
 const c=45,23;

 --> you can declare many variables in one statement.
 -->Start the statement with let/var/const and separate the variable by comma.

 --> Example :
    let person = "ram",carName = "tata" price = 2000;
*/

  // declaring variable

var car ="tata";
let price=100000 ;
console.log(car+price)

// let increse the number

var car="tataa";
let prices=100000;

prices++;
console.log(prices+car)

  // if you use const the number was donot changed
// var cars="tata"
// const pric=10000;
// pric++;
// console.log(pric+car)


// declare many variables in one statement.

var a,b,c
a=18;
b=45
c=1;

console.log(a,b,c)
console.log(a+b+c)
console.log(a+b-c)