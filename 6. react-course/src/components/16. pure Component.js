/*
  --- Pure Components---
  React pure components are the components that do not re-render when the value of props and state has been 
  updated with the same values. Since these components do not cause re-rendering when the same values are 
  passed thus they improve performance.


 */
import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render(){
        console.log("pure component render")
        return(
            <div>
                pure component {this.props.name}
            </div>
        )
    }
}
export default PureComp



/*
   In Depth

-- Pure Components --
A pure component on the other hand implements shouldComponentUpdate with a shallow props and 
state comparison.

-- Regular Component--
A regular component does not implements the shouldComponentUpdate method.it always return true by default


    * Shallow comparison(sc)

---Primitive types: a (Sc) b returns true if a and b have the same value and are of the same type.
Ex: string 'pythonlife'(sc) string 'pythonlife' returns true.

---Complex types: a (sc) b returns true if a and b reference the exact same object.

ex:
Var a=[1,2,3]
Var b=[1,2,3]
Var c=a;
Var ab_eq=( a===b); //false
Var ac_eq=( a === c);//true


    *Summary
   We can create a component by extending the Purecomponent class.
A purecomponent implements the shouldComponentUpdate LifeCycle method by performing a shallow comparsion
on the props and state of the component.

if there is no difference ,the component is not re-rendered -performance boost
 */