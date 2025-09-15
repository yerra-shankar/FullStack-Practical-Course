/*
  Type Conversion

  type conversion is the process of converting data of one type to another.

  for example : converting string data to number.

  there are two types of type conversion in javaScript.
      1. implicit Conversion - automatic type conversion
      2. Explicit Conversion - manual type conversion


1.implicit conversion: 
    javascript implicit conversion:

--> In certian situations, javascript automatically converts one data types to another(to the right 
    type). this is known as implict conversion.

    javascript explicit Conversion :

--> You can also convert one data type to another as per your needs. the type conversion that you do 
    manually is known as explicit type conversion.

    In javascript, explicit type conversions are done using built-in methods.

implicit conversion are different types but mainly three use.

    implicit conversion to string ,
    implicit conversion to number , 
    implicit boolean conversion to number
     
*/
/*
  implicit conversion to string
        (numeric string used with + gives string type) 
example:
        let result;
        result = '3' + 2
        console.log(result)  // "32"
*/
var result = "3" + 45
console.log(result)
console.log(typeof (result))

var result = "3" + "45"
console.log(result)
console.log(typeof (result))



/*
  implicit Conversion to number
        (numeric string used with -,/,* results) number type
example:
        let result;
        result= '4' - '2' ;
        console.log(result);  //2
*/
var result = "300" - "45"
console.log(result)
console.log(typeof (result))

 
/*
 implicit boolean conversion to number
       (if boolean is used true is 1, false is 0)
    example:
           let result;
           result = '4' - true;
           console.log(result);  //3
*/
var result = "300" - true;
console.log(result);
console.log(typeof(result))

/* 
implicit conversion:
    note:

--> when a number is added to a string javascript converts the number to a number to a string 
    before concatenation.
--> javascript considers 0 as false and all non-zero number as true. and, if true is converted to a
    number, the result is always 1.
--> non-numeric string used with -,/,* results to NaN
  
  Example:
  let result;
  result='hello'-'world';
  console,log(result);     // NaN
*/

var result = "hi" + "hello";
console.log(result);

var result = "hi" - "hello";
console.log(result);

var result = "45" - "18";
console.log(result);




/*
   Explicit Conversion :
 
    there are use mainly three types 
    1.convert to number explicitly, 2.convert to string explicitly, 3. convert to boolean explicitly.

    1. Convert to Number Explicitly
          To convert numeric strings and boolean values to numbers you can use number()

          example:
             let result;   //string to number
             result = Number('324');
             console.log(result);   //324
*/
var result = "456";
console.log(result);
result = Number(result);
console.log(typeof (result));

var result = "shankar";
console.log(result);
result = Number(result);
console.log(typeof (result));



/*
    2. Convert to string Explicitly
           To convert other data types to strings, you can use either string() or tostring().
           example:
              let result;    //number to string
              result = string(324)
              console.log(result);  //"324"
*/
var str = 567
str = String(str);
console.log(str);
console.log(typeof (str)); 
/*
    3. Convert to boolean Explicitly
           To convert other data types to a boolean, you can use boolean()
           example:
              let result;
              result = boolean(0)
              console.log(result);    //false
*/
var bool = "1"
console.log(bool)
str = Boolean(bool)
console.log(typeof (str));

console.log(Boolean(0));
console.log(Boolean(1));

/*
   Explicit Conversion:
      Note :
        You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor()

        Example : 
           let result= '20.1'
           console.log(parseInt(result));    //20
           console.log(parseFloat(result));  //20.01
           console.log(math.floor(result));  //20
*/
// parseInt
var a = 10.567;
console.log(typeof (a));
console.log(a)
b = parseInt(a)
console.log(b)
console.log(typeof (b))

// parseFloat
var a = "10.1";
console.log(typeof (a))
console.log(a)
b = parseFloat(a)
console.log(b)
console.log(typeof (b))

// math.floor
var a = 10.456
console.log(typeof (a))
console.log(a)
b = Math.floor(a)
console.log(b)
console.log(typeof (b))




var result = "20.1"
console.log(parseInt(result));
console.log(typeof (result))

console.log(parseFloat(result));
console.log(typeof (result))

console.log(Math.floor(result));
console.log(typeof (result))



/*
Type conversion:

        value                  string Conversion                 Number Conversion              Boolean Conversion
          1                           "1"                               1                         true
          0                           "0"                               0                         false
          "1"                          "1"                              1                         true
          "0"                           "0"                             0                         true
          "ten"                         "ten"                           NaN                       true
          true                          "true"                          1                         true
          false                         "false"                         0                         false
          null                           "null"                         0                         false
          undefined                      "undefined"                    NaN                       false
          "                                 ""                           0                        false
          ''                                " "                          0                        true
*/

var a="1"
b=Number(a)
console.log(b)
console.log(typeof(b))


var a=1
b=Boolean(a)
console.log(b)
console.log(typeof(b))

var a=undefined
b=String(a)
console.log(b)
console.log(typeof(b))


var a="shankar"
b=Number(a)
console.log(b)
console.log(typeof(b))


var a='';
b=Number(a)
console.log(b)
console.log(typeof(b))
