 /*
   looping statements:

       looping statements to execute a statement or a set of statements multiple times
          the result condition should be true to execute statements within loops.
          here we use increment operator for keeping loop alive until condition gets false.

                                             looping
                ________________________________|_______________________________________
                |               |               |               |                       |
              while          do-while           for           for...of loop           for...in loop

1. while loop :
    the test condition is given in the beginning of the loop and all statements are executed until the 
    given boolean condition becomes false.

    syntax:
        while(boolean condition)
        {
          loop statement..
        }
*/
 
var a=1;
while(a<=50)
{
    console.log("a ="+a);
    a++
}

var a=50;
while(a>1)
{
    console.log("a ="+a);
    a--
}


// nested while loop

console.log("nested while loop :")
let i = 1;
while (i<=10){
    let row = "";
    let j = 1;
    while(j<=10){
        row += (i * j) + "\t";
        j++;
    }
    console.log( row)
    i++
}

/*
do-while loop :
    do while loop is similar to while loop with the only difference that it checks the condition after
    executing the statements, i.e it will execute the loop body one time for sure because it checks 
    the condition after executing the statements.
syntax:
      do 
      {
        statements..
      }while(condition);
*/
var b=1;
do
{
    console.log("b ="+b)
    b++;
}while(b<=15);

var b=15;
do
{
    console.log("b ="+b)
    b--;
}while(b>1);


/*
   for loop :
     for loop has similar functionality as while loop but with different synatx. for loops are preferred
     when the number of times loop statements are to be executed is known beforehand.

     synatx:
          for (loop variable initialization;testing condition;increment/decrement)
          {
             //statement to be executed
          }
*/
  
for(a=1 ;a<=50;a++)
{
    console.log("page no is" + a)
}



//nested for loop
//printing the multiplation table

for (let s = 1; s<=10; s++){
    let row = "";
    for (let r = 1; r<=10; r++) {
        row += (s*r) + "\t" ;
    
    }
    console.log(row)

}


/*
  for...of loop:

  javascript for ...of loop iterates over an object's values rather then their keys. with the use of a loop, you 
  directly access the items as opposed to an index reference.
  it is a modern iteration statement which was introduced in ECMAScript 2015(ES6). it works for iterable objects
  such as arrays, strings , map, set and more.
  JavaScript for…of loop is a better choice for traversing items of iterables compared to traditional for or 
  for…in loop, especially when we have break or continue statements.


  The syntax of for…of loop is as follows:

for(variable of iterable){  
    //code to execute  
} 

*/

//array
const students = ['Ani', 'Affi', 'Rex'];  
for ( let element of students ) {  
    console.log(element);  
}  

//string
const string = 'Tpoint';  
for( let i of string){  
  console.log(i);  
}

