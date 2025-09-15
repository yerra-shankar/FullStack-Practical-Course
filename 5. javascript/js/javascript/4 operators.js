/* 
   Operators:

   Operators is a symbol that usually represents an action or process.
   An operator is capable of manipulating a certain value or operand.
   Operators are used to perform arithmetic and logical and relational operation on operands or constants.
   the Assignment operator(=) assigns a value to a variable.

   typeof operator returns the type of a variable

   example:
     let a=10;
     let b=10;
     let c=a+b;
     let C=a*b;
*/
/*
var a=10
var b='9'
console.log(typeof(a))
console.log(typeof(b))
console.log(a+b)
*/
/*
   There are different types of javascript operators:
      1. Arithmetic Operators
      2. Assignment Operators
      3. Comparison Operators
      4. Logical Operators
      5. Conditional Operators


1. Arithmetic Operators:
         Arithmetic Operators are used to perform arithmetic operations on numbers(operands)

         operator             Description
          +                    addition
          -                    subtraction
          *                    Multiplication
          **                   Exponentiation (es2016)
          /                    division
          %                    modulus (Division Remainder)
          ++                   increment
          --                   Decrement
*/
/*
var a=10
var b=4

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)
console.log(a%b)
a++;
console.log(a)
b++;
console.log(b)

var a=5
var b=7
a--;
console.log(a)
b--;
console.log(b)
*/


/* 
2. Assignment Operators:

    Assignment operations assign values to javascript variables.
 
    operator            example               same as
    =                   x = y                 x = y
    +=                  x += y                x = x + y
    -=                  x -= y                x = x - y
    *=                  x *= y                x = x * y
    /=                  x /= y                x = x / y
    %=                  x %= y                x = x % y
    **=                 x **= y                  x = x ** y 
*/
/*
var a=100
var b=8

//   a+=2
console.log(a)
//  a=a+3
console.log(a)

//  b-=2
console.log(b)
// b=b-1
console.log(b)


//    a*=2
console.log(a)
// a=a*3
console.log(a)

//  b/=2
console.log(b)
// b=b/2
console.log(b)

//  a%=29
console.log(a)
// a=a%29
console.log(a)

 b**=2
console.log(b)
b=b**2
console.log(b)
*/
/*
3. comparsion operators 
        comparsion operators are used in logical statements to determine equality or difference between variables or values.

        let x=5;

    operator         description                            comparing             Returns

    ==                 equal to                              x == 8                false
                                                             x == 5                 true
                                                             x == "5"                true

    ===             equal value  and equal type              x === 5                true
                    (strictly equal to)                      x === "5"              false

    !=                 not equal                             x != 8                true

    !==             not equal value and not equal type       x !== 5               false
                     (strictly not equal to)                 x !== "5"             true
                                                             x !== 8               true

    >                   greater than                         x > 8                  false
    <                   less than                            x < 8                  true
    
    >=              greater than  or equal to                x >= 8                false
    <=              less than or equal to                    x <= 8                true
*/
/*
// equal to
var a=10
var b=3
console.log(a==b)

var a=8
var b=8
console.log(a==b)

var a=9
var b="9"
console.log(a==b)

// equal value and equal type

var a=18
var b=18
console.log(a===b)

var a=18
var b="18"
console.log(a===b)

// not equal

var a=19
var b=2
console.log(a!=b)

// not equal value and not equal type

var a=18
var b=18
console.log(a!==b)

var a=45
var b="45"
console.log(a!==b)

var a=7
var b=9
console.log(a!==b)

// greater than
 var a=8
 var b=10
 console.log(a>b)

//  less than

var a=8
var b=10
console.log(a<b)

// greater than or equal to 

var a=5
var b=7
console.log(a>=b)

// less than or equal to=

var a=5
var b=7
console.log(a<=b)
*/
/*
  Logical Operators

      Logical operators are used to determine the logic between variables or values.

      let assume, x = 6 and y = 3

      operator                   descripton                    example

      &&                          and                           (x < 10 && y > 1)  is true
      ||                           or                            (x == 5 || y == 5)  is false
      !                           not                             !(x == y)  is true
*/
/*
var a=5
var b=8
// and
console.log(a>b && a<b)
console.log(a<b && b>a)

// or
console.log(a>b || a<b)

// not
var a="shankar"
console.log(!a)

var b=0
console.log(!b)
*/
/*
5. Conditional Operations:
        Conditional operator is used for evaluating a specific condition which eventually affects to choose any one of the two boolen
        values or expressions. also called ternary operator the outcome of the entire evaluation comes as either true or false.

        it uses ? : for making the entire evaluation which has synatx like:

        synatx:
               conditional_expression ? expression1:expression2
*/

var a=18
var b=7
a>b?console.log("a is big"):console.log("b is big");
