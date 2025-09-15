/*
    String:

---> A string can be any text that wrapped in single/double quotes(''/"")
---> javaScript strings are for storing and manipulating text.
---> String is a reference type datatype.
---> Example:
    let a ="car";  // Double quotes
    let b ='bus';  // Single quotes
---> You can use quotes inside a string, as long as they don't match the quotes surrounding the string.
    like;  let b = "ram's bus"
*/
// difference between the single quotes double quotes
a ="hi this is javascript";
console.log(a); 
  
a="hi it's javascript"
console.log(a)

// a="hi "this" is javascript"  //error
// console.log(a)

a='hi its "javascript"'
console.log(a)


/*
   String : method or functions
   (length, charAt(), indexOf(), toUpperCase(), toLowerCase(), toString(), cancat(), slice(), split())

   length: To find the length of a string, use the built-in length property.
   charAt(): Returns the character at a specified index (position)
   indexOf(): Returns the index (position) of the first occurrence of a value in a string.
   toUpperCase(): Returns a string converted to uppercase letters.
   toLowerCase(): Returns a string converted to lowercase letters.
   toString(): Returns a string or a string object as a string.
*/
a="javascript";
console.log(a);
console.log(a.length);
console.log(a.indexOf("p"))
console.log(a.charAt(6))
console.log(a.toUpperCase())
b="SHANKAR"
console.log(b.toLowerCase())
console.log(b.toString())
console.log(b.concat(a))
console.log(b.slice(2,5))
c="this is a example of split"
console.log(c.split(" "));


/*
  String this 
        
        Escape Character

        Because strings must be written within quotes, javaScript will misunderstand string:
             let text="We are the so-called ""vikings" from the north.";
        The solution to aviod this problem, is to use the backslash escape character.
        The backslash (\) escape character turns special characters into string characters:

        Code           result                  Description
        \'              '                         single quote
        \"               "                        double quote
        \\                \                       backslash
        \n                                         newline
        \t                                        horizontal tabulator
*/
// single quote
// console.log('it's javascrpit')  (not worked)
console.log('it\'s javascript' )

// double quote
// console.log("it"s me")
console.log("it\"s me")

// backslash
console.log("it\\ me")

// new line
console.log("it\nme")

// horizonatal tabulator
console.log("it\tme")



/*
   string:
     array of string:
                    
       Array is a collection of similar type of data that stores data in a sequential manner.
       array of string : collection of string / sequence of characters.

       To create an array of strings you can simply type.

       // Creating an array of string: string1, string2, string3
        let arrstring=["string1","string2","string3"];

        //Creating an array of string : string1, string2, string3
        let arrstring=new Array("string1","string2","sting3");
*/

var a= ["ram","shankar","saketh","siva"]
console.log(a[2])    // only positive number no negative


var a=new Array("string1","string2","string3","string4")
console.log(a[3])

var b=["a","b"];
console.log("name : \n" + b[0]);