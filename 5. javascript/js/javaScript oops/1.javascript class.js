/*
  class
     
    claas is an blue print of an object

    In javascript, classes are the special type of functcions. we can define the class just like function
    declarations and function expressions.
     
    the javascript class contains various class members within a body including methods or constructor.

    if you access the values use---->get
    
*/

// construct an object
// let mobile ={
//     brand : 'apple',
//     price : 35000,
//     color : 'silver'
// };
// console.log(mobile);





// create an object with a class

class Mobile{
    // this class contains a special function called constructor
    constructor(brand,price,color) {
        this.brand = brand
        this.price = price
        this.color = color
    }

    getBrand(){
        return this.brand;
    }

    getPrice(){
        return this.price;
    }    
    getColor(){
        return this.color;
    }


    printspecification(){
        let spec = `BRAND : ${this.getBrand()}
                    PRICE : ${this.getPrice()}
                    COLOR : ${this.getColor()}`;
        console.log(spec);
        
    }

}
let mobile = new Mobile('apple',35000,'sliver');
mobile.printspecification()


console.log(" 'after change price value using setter function' ")
// if you want change the price, color or name you need to write a--->set
class Mobile1{
    // this class contains a special function called constructor
    constructor(brand,price,color) {
        this.brand = brand
        this.price = price
        this.color = color
    }

    getBrand(){
        return this.brand;
    }

    setBrand(brand){
        this.brand = brand;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price){
        this.price = price;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }


    printspecification(){
        let spec = `BRAND : ${this.getBrand()}
                    PRICE : ${this.getPrice()}
                    COLOR : ${this.getColor()}`;
        console.log(spec);
        
    }

}
let mobile1 = new Mobile1('apple',35000,'sliver');
mobile1.printspecification()
mobile1.setPrice(55000)
mobile1.printspecification() 




// another example

//Declaring class

class Employee
{
    // initializing an object
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    // Declaring method
    detail(){
        console.log(this.id+" "+this.name)
    }
}
// passing object to a variable
var e1=new Employee(101,"Martin Roy");
var e2=new Employee(102,"Duke William");
e1.detail();
e2.detail();



/*
var e1=new Employeee(101,"Martin Roy");
var e2=new Employeee(102,"Duke William");
e1.detail();
e2.detail();
class Employeee
{
    // initializing an object
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    // Declaring method
    detail(){
        console.log(this.id+" "+this.name)
    }
}
*/