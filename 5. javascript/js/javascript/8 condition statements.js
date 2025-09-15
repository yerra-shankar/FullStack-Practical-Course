/*
  condition statement are used to decide the flow of execution based on different conditions.
  if a condition is true, then perform one action and if the condition is false then perform another

  types of conditional statement :- (if, if-else, if-else-if, nested if-else, switch).

1. if statement:- it is used to select a block of statement based on certain condition becomes true, 
otherwise general execution flow condition
syanatx:-
      if(condition)
      {
         block of statement
      }
*/
var x = 10, y=20;
if (x<y); 
{
    console.log("X is smallest")
}



/*
2. if-else statements:- it evaluate the content whether condition is true or false.
   synatx:-
        if(condition)        (if is only true statement)
        {
         block statement
        }
        else
        {
        block statement    (false statement only)
        }
*/
var x=30,y=20

if (x<y){
    console.log("x is smallest")
}
else{
    console.log("y is smallest")
}



/*
3. if-else-if  statement :- it evaluate the content only if expression is true from several expressions.
synatx:-
    if(condition)
      {
      block of statement
      }
    else if  (condition)
      {
      block of statement
       }
    else
      {
    block of statement
     }
*/
// example of 
var x=18,y=45,z=7
if(x>y){
    console.log("x is bigger")
}
else if(x>z){
    console.log("y is bigger")
}
else{
    console.log("z is bigger")
}

//another example     ( use logical operators)
var x=10, y=20, z=30
if((x<y)&&(x<z)){
    console.log("x is smallest")
}
else if((y<x)&&(y<z)){
    console.log("y is samllest")
}
else{
    console.log("z is smallest")
}

// another exmaple
var a=20
if(a==10){
    console.log("a is equal to the 10")
}
else if(a==15){
    console.log("a is equal to the 15")
}
else if(a==20){
    console.log("a is equal to the 20")
}
else{
    console.log("a is not equal to 10, 15 or 20")
}




/*
 4. nested if-else:- it is used when we want to check more than one condition at a time in a same program
 synatx:-
    if(condition)
      {
          if (condition)
            {
              block of statement
            }
          else 
          {
            block of statement
          }
      }
    else{
        block of statement
       }
*/
var x=10, y=2, z=30
if(x<y){
    if(x<z){
        console.log("x is smallest")
    }
    else{
        console.log("z is smallest")
    }
}
else{
    if(y<z){
        console.log("y is smallest")
    }
    else{
        comsole.log("z is smallest")
    }
}




/*

    Switch Statement
The switch statement is mainly used to select one option among multiple options i.e. use the switch
statement to select one of many blocks of code to be executed.  
synatx:-
      Switch(expression)
      {
        case label 1 : statement
                        break
        case label2 :statement
                       break
            .
            .
            .
        default :    statement
                      break
      }
*/

 var a=10 , b=20 , c=23 ;
 switch(b)
 {
    case 10:console.log("value is 10")
    break;
    case 20:console.log("value is 20")
    break;
    case 23: console.log("value is 23")
    break
    default:console.log("no matching case found")
 }
// example 2
 var a=10 , b=20 , c=23 ,d=30;
 switch(d)
 {
    case 10:console.log("value is 10")
    break;
    case 20:console.log("value is 20")
    break;
    case 23: console.log("value is 23")
    break
    default:console.log("no matching case found")
 }

//   example 3

const fruit ="apple"
switch (fruit)
{
    case 'oranges':
        console.log('i prefer Oranges');
        break;
    case 'watermelons':
        console.log('i prefer watermelon too');
        break;
    case 'apple':
        console.log('one apple a day keeps the doctor away')
        break;
    default:
        console.log(`sorry, we are out of ${fruit}}`)
}


// example 4

var expression='apple'
switch(expression){
    case 'orange':
        console.log('i prefer orange');
    
    case 'watermelon':
        console.log('i prefer watermelon too');

    case 'apple':
        console.log('one apple a day keeps the doctor away');

    default:
        console.log(`sorry, we are out of ${expression}`);
}