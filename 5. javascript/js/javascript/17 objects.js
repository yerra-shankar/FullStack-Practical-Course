/*
  Objects:-
    javascript variables are containers for data values. objects are variables too, but they can contain
    many values.

    Think of an object as a list of values that are written as name:value pairs, with the names and the 
    values separated by colons.

    javascript objects are containers for named values.

    Example :
           var person = {name:"john",age:31, favColor:"green", height:183}; 

*/

var person= {name : "Shankar", age: "24", class:"10"};
console.log(typeof(person));
 
// accessing the object
/*
Object properties:-
    
              You can access object properties in two ways.
    objectName.propertyName             //or               objectName['propertyName']
                                         |
    javaScript's built-in length property is used to court the number of characters in a property or string.
                            objectName.propertyName.length
                                          |
                        objects are one of the core concepts in javascript.
*/

var person ={name:"shankar", age:"18", class:"10"}
console.log(typeof(person));
console.log(person.name);
console.log(person.name.length)

/*
   Object methods:-
        An object method is a property that contains a function definition.
        use that following syntax to access an object method.
        objectName.methodName()
        document.write() output data. the write() function is actually a method of the document object.

        up to now we discussed object using the object literal(or initializer) synta  x.
               var person = {name:"john",age:42,favcolor:"green"}

        this allows you to create only a single object.

    the object Constructor:

        sometimes, we need to set an "object type" that can be used to create a number of objects of a 
        single type.

        the standard way to create an "object type" is to use an object constructor function.
           
                function person(name,age,color){
                     this.name=name; this.age =age; this.favcolor = color;}

        The above function (person) is an object constructor, which takes parameters and assigns them to
        the object properties.

        The this keyword refers to the current object. note that this is not a variable. it is a keyword,
        and its value cannot be changed.

    The Object Constructor:
    --> Once you have an object constructor, you can use the new keyword to create new objects of the
        same type

    var p1 = new person("john",42,"green");
    var p2 = new person("army", 21, "red");

    p1 and p2 are now objects of the person type. Their properties are assigned to the corresponding values.
                You can access values like
                 console.log(p1.name);
*/
function Perso(name,age){
    this.name=name;
    this.age=age;
}
var p1= new Perso(" shankar", 22);
var p2= new Perso("siva", 25);
console.log(p1.name);
console.log(p1.age);
console.log(p2.name);
console.log(p2.age);

