/*
   -> Arrays
   -> Array creation and access

1. arrays:
       An array is a special variable, which can hold more than one value.
       Arrays store multiple values in a single variable.

       synatx:-
              var variable_name = new Array("e1","e2",..."en");

        example:
                var courses = new Array ("HTML","css","js"); 

    This syntax declares an array named coures, which stores three values, or elements.
*/
var names=new Array("shankar","siva","saketh");
console.log(names)



/*
   Accessing an array:-
       you refer to an array element by referring to the index number written in square brackets.
       This statement accesses the value of the first element in courses and changes the values of the
       second element.

    Example:-
          var courses = new Array("html","css","js")
          var courses = courses[0];   //html
          courses[1]="c++";   // change the second element
        
        [0] is the first element in an array.[1] is the second. Array indexes start with 0.
*/

var names=new Array ("shankar","siva","saketh");
console.log(names[0]);
console.log("array 2nd element is "+names[1]);     //use string concat also
names[2]="ram";           // change the element
console.log(names)

console.log(names[8])
names[10]="aswini"
console.log(names)



/*
  array:
           attempting to access an index outside of the array, returns the value undefined.

        you can also declare an array, tell it the number of elements it will store, and add the element
          later. like:
                      var courses = new Array(3)
                      courses[0] = "html";
                      courses[1] = "css";
            
*/

var a= new Array(10)
a[0]=5;
a[1]=10;
a[2]=20;
a[3]=30;
console.log(a)
console.log("using loops")

for(i =0;i<10;i++)
{
    console.log(a[i]);
}

/*
  Arrays :
          An array is a special type of on object.

          an array uses numbers to access its elements, and an object uses names to access its members.
          you can access and modify the elements of the array using the index number.     
*/