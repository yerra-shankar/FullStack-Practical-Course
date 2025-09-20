/*
 --Destructuring props & state

      Destructuring means to break down a complex structure into simpler parts with the syntax of 
destructuring, you can extract smaller fragments from objects and arrays. it can be used for assignments
and declaration of a variable.

      Destructuring is an efficient way to extract multiple values from data that is stored in arrays
or objects. when destructuring an array, we use their positions (or index) in an assignment
   

  there are two types of using functional props in destructuring
  1. with the help of functional parmeters
  2. with the help of functional body

*/
/*
//  type : 1 
import React from 'react'

const Destruct=({name,city})=>{
    return(
        <div>
            <h1>
                Hello {name} {city}
            </h1>
        </div>
    )
}
export default Destruct

*/

/*
// type : 2
const Destruct=(props)=>{
    const {name,city}=props
    return (
        <div>
            <h1>
                Hii {name} {city}
            </h1>
        </div>
    )
}
export default Destruct
*/





// using class component destructuring

import React,{ Component } from "react"

class Destruct1 extends Component{
    render(){
        const {name,city}=this.props      //props syntax
    //    const {state1,state2}=this.state    //state synatx
        return( 
           <h1>Hlo {name} {city}</h1> 
        )
    }
}
export default Destruct1 

