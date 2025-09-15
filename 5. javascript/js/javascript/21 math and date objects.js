/*
   1. Math object
   2. Date object

   1. math object :-
        The Math object allows you to perform mathematical tasks, and includes several properties.
          Unlike other objects, the Math object has no constructor.
          The Math object is static.
          All methods and properties can be used without creating a math object first.

          The synatx for math any methods is:math.method(number)

        Math Methods:-

        Number to integer

        There are 4 common methods to round a number to an integer:

        math.round(X)  -- Returns X rounded to its nearest integer
        math.ceil(x)   -- Returns x rounded up to its nearest integer
        math.floor(x)  -- returns x rounded down to its nearest integer
        math.trunc(x)  -- returns the integer part of x (new in ES6)

*/
/*
var a=23.5;
var b=24.5
console.log(Math.round(a))
console.log(Math.ceil(a))
console.log(Math.floor(a))
console.log(Math.trunc(a))

console.log(Math.abs(a))
console.log(Math.acos(a))
console.log(Math.atan(a))
console.log(Math.atan2(a,b))
console.log(Math.log(a))
console.log(Math.exp(4))
console.log(Math.sin(a))
console.log(Math.sqrt(4))
// etc
*/
/*
  Math properties (Constants)
      syntax : Math.property
      javascript provides 8 mathematical constants that can be accessed as math properties:

      Math.E       // returns Euler's number
      Math.pi      // returns pi
      Math.SQRT2   // returns the square root of 2
      Math.SQRT1_2   // Returns the square root of 1/2
      Math.LN2      // returns the natural logarithm of 2
      Math.LN10     // returns the natural logarithm of 10
      math.LOG2E    // returns base 2 logarithm of E
      Math.LOG10E   // returns base 10 logarithm of E
*/
console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)


/*
Date Object:-
      The date object enables us to work with dates.
      A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.

      Using new Date(), create a new date object with the current date and time.
        Example:-
                  var d = new Date();
                  //d stores the current date and time
*/
var dt = new Date();
console.log(dt)

/*
  Data Object:-

         Data objects are created with the new Date() constructor. 
            There are 9 ways to create a new date object:

            -> new Date(date string)
            -> new Date(year,month)
            -> new Date(year,month,day)
            -> new Date(year,month,day,hours)
            -> new Date(year,month,day,hours,minutes)
            -> new Date(year,month,day,hours,minutes,seconds)
            -> new Date(year,month,day,hours,minutes,seconds,milliseconds)
            -> new Date(milliseconds)
*/
var dt = new Date(2002,12)
console.log(dt)


/*
  Date object:
       The other ways to initialize dates allow for the creation of new date objects from the specified
       date and time 
          example:-
           new Date(milliseconds)
           new Date(datestring)
           new Date (year,month,day,hours,minutes,seconds,milliseconds)
        
    javascript dates are calculated in milliseconds from 01 january, 1970 00:00:00 universal Time(UTC).
    one day contains 86,400,000 milliseconds)

    javaScript counts months from 0 to 11. january is 0, and December is 11.

    Data objects are static, rather than dynamic. the computer time is ticking, but date objects don't
    change,once created
*/

var dt = new Date(86400000)
console.log(dt)

/*
Date methods:
     when a Date object is created, a number of methods make it possible to perform operations on it.
          synatx: object.method()
            
          method                    Description
          getFullYear()              gets the year
          getMonth()                  gets the month
          getDate()                   gets the day of the month
          getDay()                    gets the day of the week
          getHours()                  gets the hour
          getMinutes()                get the minutes
          getSeconds()                get the seconds
          getMilliseconds()           get the milliseconds
*/
var dt = new Date();
console.log(dt)
console.log(dt.getDate())
console.log(dt.getFullYear())
console.log(dt.getMinutes())
console.log(dt.getHours())