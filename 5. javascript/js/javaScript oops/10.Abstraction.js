/*
  Javascript Abstraction
  In javascript, abstraction refers to the concept of hiding complex details and showing only an object's essential
  features or functionalities. Simply, it helps us reduce complexity and allows us to design efficiently and
  implement complex software systems. we can achieve abstraction with either abstract classes or with the help of
  interfaces

  An abstraction is a way of hiding the implementation details and showing  only the functionality to the users.
  In other words, it ignores the irrelevent detaails and shows only the required ones.

  Points to Remember
  1. We cannot create an instance of abstract class.
  2. it reduces the duplication of code.  
*/

// example 1

//Define a function called `add` that takes two arguments, `a` and `b`, and returns their sum.
function add(a, b) {
    return a + b
}
// Define a function called `subtract` that takes two arguments, `a` and `b`, and returns their difference.
function subtract(a, b) {
    return a - b;
}
//Define a function called `multiply` that takes two arguments, `a` and `b` and returns their product.
function multiply(a, b) {
    return a * b;
}
//Define a function called `divide` that takes two arguments, `a` and `b` and returns their quotient.
function divide(a, b) {
    return a / b
}
//Define a function called `calculate` that takes two arguments, `a` and `b`, and an operator, and returns the result of applying the operator to `a` and `b`
function calculate(a, b, operator) {
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a,b);
        case 'multiply':
            return multiply(a,b);
        case 'divide':
            return divide(a,b);
        default:
            throw new Erroor('invalid operator')
    }
}
// call the `calculator` function with the arguments 5,3 and 'add'
const result = calculate(5,3,"add",)
const result1 = calculate(5,3,"subtract",)
const result2 = calculate(5,3,"multiply",)

console.log(result)
console.log(result1)
console.log(result2)



// example 2
// Let's take an example to achieve abstraction
function Vehicle(){
    this.vehicleName = "vehicleName";
    throw new Error("you cannot create an instance of Abstract Class")
}
Vehicle.prototype.display = function(){
    return "Vehicle is:" +this.vehicleName;
}
//creatinga constructor function
function Bike(vehicleName){
    this.vehicleName = vehicleName;
}
//Creating object without using the function constructor
Bike.prototype =Object.create(Vehicle.prototype)

var bike = new Bike(" Hero Honda");
console.log(bike.display())



// example 4:
//Define a function called `calculateArea` that takes an object with a `width` and `height` property, and returns the area of the rectangle.
function calculateArea(rectangle){
    return rectangle.width * rectangle.height;
}
//Define an Object called `rectangle1` with a `width` od 5 and a `height` of 10.
const rectangle1 = {
    width:3,
    height:10
};
//Define an Object called rectangle2 with a `width` of 10 and a `height` of 20
const rectangle2 = {
    width:10,
    height:20
};
//Call the `calculatoAera` function with the `rectangle1` Object as an argument.
const area1 = calculateArea(rectangle1);
//Call the `calculatoAera` function with the `rectangle2` Object as an argument.
const area2 = calculateArea(rectangle2);
console.log(`Area of rectangle1: ${area1}`);
console.log(`Area of rectangle2: ${area2}`);

console.log('Area of rectangle1: ' + area1);


