/*
Javascript Objects

In javascript an object is a variable that canhold multiple value . it is a location where a collection of values 
is stored. objects are among the most basic data types in javascript . Every object contains propertues and types,
which are the single unit. Object are not primitive, unlike primitive data types.


Syntax of Object In javascript
Object literal syntax

const myObject = {
   key1:value1,
   key2:value2,
//more key-value pairs
}



Creating a javascript Object:
javascript provides several means of object construction, and felxibility as well as versatility are both achievable.
The different methods of object construction in javascript are:

    1. Using an Object Literal
    2. Employing the javascript Keyword new
    3. Constructing a constructor object



    1. Using an object Literal
    Object literal is the easiest method of declaring an object in javascript. it is the process of declaring key-value
    paris in curly brackets {} to declare an object
*/
let person = {
    name:"shankar",
    age:22,
    city:'viskhapatanam'
}
console.log(person)

/*
 2. Using new keyword
You can also create instances using constructor functions with the new keyword. Constructor functions enable you 
to create multiple objects with the same methods and properties.
*/

function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}
//creating a new instance of person
let person1 = new Person('Evan', 30, 'Paris');
let person2 = new Person('Anupam', 25, 'Delhi')
console.log(person1)
console.log(person2)


/*
 javascript Objects are Mutable

 javascript object are mutable i.e., you can change their properties even after the object has been initialized.
 This makes you capable of adding or removing properties, and changing existing ones.
*/

let person3 = {
    name:'saketh',
    age:'25',
    city:'Delhi'
};
//Modifying property value
person3.age = 32;
//Adding a new property
person3.email = 'yerrashankar9392@gmail.com';
//removing one property
delete person3.city;
console.log(person3)


/*
  Javascript Built-in methods

Here are some commonly used javascript methods:

create()
entries()
keys()              if you want theory open TpoinTech
values()
is()


   1. Object.create()
   Object.create() method creates a new object and links it to an existing object
*/
const people = {
printintro:function(){
    console.log(`My full name is ${this.Fname}. Am l Alive? ${this.isalive}`);
}
};
const name1 = Object.create(people);
name1.Fname = "Robert"
name1.isalive = true;
name1.printintro()



//2. Object.entries():- The Object.entries() returns the object's array consisting of enumerable properties [key, value] pair
const student = {1: 'Steve', 100: 'Sanju', 45: 'Chris'}
console.log(Object.entries(student));




//3.Object.keys():- The Object.keys() method gives you back the enumerable properties of an array or an array-like object, even if the keys are in a random order.
let employee_detail = {
    employee_name:'Smith',
    employee_salary: 144,
    employee_age : 23
};
console.log(Object.keys(employee_detail));
console.log(Object.keys(employee_detail).length);


//4.Object.value():-The `Object.values()` function gives you an array of values of an object property. It gives you the values of the object and returns them in an array form.
var check = ['x','y','z'];
console.log(Object.values(check));


/*
Object.is()
The javascript Object.is() method is a useful function that allows you to see whether two values are exactly equal.
it does so without type coercion i.e., it looks at values as they are. And, it even accounts for some special cases
such as having differentiating between positive and negative zero
*/

console.log(Object.is(5,5));
console.log(Object.is('java','java'));
console.log(Object.is(true, false));
console.log(Object.is(0, -0));
console.log(Object.is(NaN, NaN));



//their are lot of javascript Object Methods(open Tpointtech)