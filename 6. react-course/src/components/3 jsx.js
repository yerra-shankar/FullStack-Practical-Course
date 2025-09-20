/*----JSX----

* javascript XML(JSX) - Extension to the javascript language synatx.
* write XML - like code for element and components.
* JSX tags have a tag name, attributes, and childern.
* JSX is not a necessity to write React application.
* JSX makes your react code simpler and elegant.
* JSX ultimately transpiles to pure javascript which is understood by the browsers. 


*/

import React from 'react';

const Hello=()=>{
    return(
        <div>
            <h1>Example of JSX </h1>  
        </div>                          // its called a JSX method
    )

 
    //let use non jsx method
    // return React.createElement('div',null,'example of non jsx method using createElement')

    // multiple createElement method
    // return React.createElement('div',null,
    //     React.createElement('h1',null,'example of non jsx method using multiple createElement'))

    // keyvalues pares
    // return React.createElement('div',{id:'Hello',class:'dummyclass'},
    //     React.createElement('h1',null,'example of non jsx method using multiple createElement and key values'))

}
export default Hello



/*
explaination createElement :-
  if you use  non jsx method, and you definately use ---createElement()
  createElement has three parameters
    
    createElement(
       first parameter is --- html tags
       second parameter is --- some optional properties or NUll
       third parameter is --- html-children
    )
  
*/