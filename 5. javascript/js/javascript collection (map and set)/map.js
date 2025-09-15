/*
javascript Map

The javascript Map object is used to map keys to values, it stores each element as keys-value pair. it operates the
element such as search and delete on the basis of specified key.

synatx:
 new Map([literable])

*/

const original = [1,18,45,19];
const doubled = original.map(x => x * 2);
console.log(doubled);   
console.log(original)


/*

JavaScript Map Methods


Methods                                         Description

clear()                                    It removes all the elements from a Map object.
delete()                                   It deletes the specified element from a Map object.
entries()                         It returns an object of Map iterator that contains the key-value pair for each element.
forEach()                                   It executes the specified function once for each key/value pair.
get()                                     It returns the value of specified key.
has()                                      It indicates whether the map object contains the specified key element.
keys()                                     It returns an object of Map iterator that contains the keys for each element.
set()                                      It adds or updates the key-value pairs to Map object.
values()                                   It returns an object of Map iterator that contains the values for each element.

*/