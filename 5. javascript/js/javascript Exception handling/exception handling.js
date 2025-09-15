/*
What is Exception Handling?
In programming, exception handling is a process or method used for handling the abnormal statements in the code and
 executing them. It also enables to handle the flow control of the code/program. For handling the code, various
  handlers are used that process the exception and execute the code. For example, the Division of a non-zero value 
  with zero will result into infinity always, and it is an exception. Thus, with the help of exception handling, 
  it can be executed and handled.F


  Exception Handling Statements
There are following statements that handle if any exception occurs:

  1. throw statements
  2. try…catch statements
  3.  try…catch…finally statements.


  1.throw statement:
  Throw statements are used for throwing user-defined errors. User can define and throw their own custom errors.
   When throw statement is executed, the statements present after it will not execute. The control will directly
    pass to the catch block.

    synatx:-
    throw exception;
*/
// throw example with try...catch
try{
    throw new Error('This is the throw keyword')//user -defined throw statement.
}
catch(e) {
    console.log(e.message)
}



/*
2.  try...catch

try{} statement: Here, the code which needs possible error testing is kept within the try block. In case any error
 occur, it passes to the catch{} block for taking suitable actions and handle the error. Otherwise, it executes the 
 code written within.

catch{} statement: This block handles the error of the code by executing the set of statements written within the 
block. This block contains either the user-defined exception handler or the built-in handler. This block executes 
only when any error-prone code needs to be handled in the try block. Otherwise, the catch block is skipped.


   syntax:-

       try{  
        expression; } //code to be written.  
       catch(error){  
        expression; } // code for handling the error.  

*/

try{
    var a =["18","45","33","1","19","69"]; // a is an array
    console.log(a); //display elements of a
    console.log(b)  // b is undefined but still trying to fetch its value. thus catch block will be invoked
}catch(e){
    console.log("There is error which shows " + e.message)// Handling error
}




/*
3. try...catch..finally statements
    Finally is an optional block of statements which is executed after the execution of try and catch statements.
     Finally block does not hold for the exception to be thrown. Any exception is thrown or not, finally block code,
     if present, will definitely execute. It does not care for the output too.

     Syntax:

try{  
expression;  
}  
catch(error){  
expression;  
}  
finally{  
expression; } //Executable code
*/

try{
    var a =3;
    if(a==3)
        console.log("ok");
    }
    catch(e){
        console.log("Eroor found" + e.message);
    }
    finally{
        console.log("value of a is", a);
    }


    // exaple 2

    try {
  let a = 3;

  if (a === 2) {
    console.log("ok");
  } else {
    throw new Error("a is not 2");  // ← This forces the catch to execute
  }
} catch (e) {
  console.log("Error found: " + e.message);
} finally {
  console.log("value of a is", a);
}
