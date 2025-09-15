/*
   Array's Methods:
            The length Property
                javascript arrays have useful built-in properties and methods.
                An array's length property returns the number of it's elements.

                example:
                     array_name.length

        the length property is always one more than the highest array index.
        if the array is empty, the length property returns 0.
  
*/
var a=new Array("shankar","siva","saketh","aswini","santhosh","bharathi","simhachalam")
console.log("array length is " + a.length)

// another example

var a= new Array(3)
a[0]=5;
a[1]=10;
a[2]=20;
console.log(a)
console.log("example of  array")
for(i =0;i<3;i++)
{
    console.log(a[i]);
}



var b = new Array(5);
b[0]=5;
b[1]=10;
b[2]=20;
b[3]=30;
b[4]=40;
console.log(b);
console.log("example of length to access a array by using loop");
for (i =0;i<b.length;i++)
{
    console.log(b[i]);
}

console.log("array length is " + b.length)



/*
   Combining Arrays
          javascript's concat() methods allows you to join arrays and create an entirely new array.
            example:-
                   var c1 = ["HTML","CSS"];
                   var c2 = ["js","c++"]
                   var courses = c1.concat(c2);

                   consol.log(courses[2]);

*/
var a = new Array("1","2");
var b = new Array("3","4");
console.log(a,b);
console.log("a values " +a)
console.log("b values " +b)

var num = a.concat(b)
console.log("c values " +num)

var num = b.concat(a)
console.log("c values "+ num)

/*
   array's methods :-
           popping and pushing:
             when you work with arrays, it is easy to remove elements and add new elements.
             this is what popping and pushing is:
               popping items out of an array, or pushing items into an array.

               the pop() method removes the last element from an array.

               the push() method adds a new element to an array (at the end).
*/

var a = new Array("1","2");

console.log("a values " +a);
a.pop()
console.log("a values after pop()\t "+a)
a.push("hello")
console.log("a values after push()\t "+a)



/*
    array delete()
           array elements can be deleted using the javascript operator delete.

           examples:-
                  delete array_name[index];
                using delete leaves undefined holes in the array.
                use pop() or shift() instead
*/
 
var a = new Array("1","2","3")
console.log(a)
delete a[1]
console.log("a values after delete \t"+a)
console.log(a)


