/*
Javascript Set:
  
  what  is set in javascript
--> In javascript, a set is a data object that we use for holding a colletion of unique values. with the help odf 
    sets, we can hold any type of data but sets don't contain duplicate values or items.

    if we have a dupkicate or equal value in a set, only the first instance will be saved in other words, a set is an
    object that allows us to store the unique values and no element can be repeated.

    The javascript set object is used to store the element with unique values. The values can be any type i.e
    whether primitive values or object references.

    Synatx:-
    new Set([iterable])

*/

const ids = new Set ([2,4,5,6,1,8,9,0]);
console.log(ids)


/*
    javascript Methods


    Methods                                 Descripition

    add()                                 it adds the specified values to the Set object.
    clear()                               it removes all the elements from the set object.
    delete()                              it delete the specified element from the Set object.
    entries()                             it returns an object of Set iterator that contains an array of [value, value] for each element.
    forEach()                             it executes the specified function once for each va;lue.
    has()                                 it indicates whether the Set object contains the specified value element
    values()                              it returns an object of Set iterator that contains the values for each element
*/

//add()
// syntax:- Set_name.add(element)

const cars = new Set(['BMW', 'Mercedes', 'Audi']);
cars.add('Porsche')
console.log(cars)


//delete()
// syntax:- Set1.delete(value)

const car1= new Set(['BMW', 'Mercedes','Audi'])
car1.delete('BMW')
console.log(car1)


//has()
//syntax:- Set_name.has(val);

let set1 = new Set();
set1.add(45);
set1.add(34)
set1.add(3)
console.log(set1)   // just displaying set1
console.log(set1.has(45));
console.log(set1.has(34));
console.log(set1.has(3));



//values()
// syntax:- set1.values()

const vegetables = new Set([100,321, 234, 45,76]);
for (const vegetable of vegetables.values()){
    console.log(vegetable)
}



//Clear();
//syntax:- Set1.clear();

let set2 = new Set([11, 12, 13, 14, 15]);
console.log(set2);
set2.clear()
console.log(set2)



//entries()
//syntax:- Set_name.entries();

let set3 = new Set();
set3.add(50);
set3.add(40);
set3.add(30);
set3.add(20);
set3.add(10);
let getEntriesArry = set3.entries();
console.log(getEntriesArry.next().value)
console.log(getEntriesArry.next().value)
console.log(getEntriesArry.next().value)
console.log(getEntriesArry.next().value)
console.log(getEntriesArry.next().value)

