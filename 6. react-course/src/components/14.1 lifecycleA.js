/*
  1. Mounting Lifecycle

--> constructor(): constructor(props)
The constructor() method is called before anything else, when the component is initiated, and it is the 
natural place to set up the initial state and other initial values. The constructor() method is called 
with the props, as arguments, and you should always start by calling the super(props)

--> Static getDerivedStateFromProps():
when the state of the component depends on changes in props over time.set the state.this state does not
 access the this keyword.

--> rendera():
Read props and state return jsx.children component lifecycle methods are also executed.

--> componentDidMount()
invoked immediately after a component and all its children components have been rendered to the DOM r3


  2. Updating Lifecycle Methods:

--> static getDerivedStateFromProps():
  static getDerivedStateFromProps(props, state)
  This method is called every time a component is re-rendered

--> shouldComponentUpdate(nextProps,nextState)
   Dictates if the component should re-renderor not performance optimization

--> render():
    read props and state and return jsx

--> getSnapshotBeforeUpdate(prevProps,prevState)
    This method called before the changes from the virtual DOM are to be reflected in the DOM. Capture
    some information from the DOM.

--> ComponentDidUpdate(prevProps,prevState,snapshot)
   Called after the render is finished in the re-render cycles.

   3.Unmounting phase method

--> Method is invoked immediatley before a component is unmounted any destroyed.
--> Cancelling any network request ,removing event handlers,concelling any subscriptions and also 
    invalidating timers.
--> Do not call the setState method.

    componentWIllUnmount()


   4. Error Handling Phase Methods
   When there is an error either during rendering ,in a lifecycle method, or in the constructor of any
   child component.

--> static getDerivedStateFromError(error)
--> componentDidCatch(error,info)
*/

import React, { Component } from 'react'
import LifecycleB  from './14.2 child  lifecycleB'

class LifecycleA extends Component {
   constructor(props) {
      super(props)

      this.state={
         Name:'Divya'
      }
      console.log("lifecycleA constructor")
   }

   static getDerivedStateFromProps(props,state){
      console.log("lifecycleA getDerivedstateFromprops")
      return null
   }
   componentDidMount(){
      console.log("lifecycleA componentDidMount()")
   }
   shouldComponentUpdate(){
      console.log("lifecycleA shouldComponentUpdate")
      return true
   }
   getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("lifecycleA getSnapshotBeforeUpdate")
      return null
   }
   componentDidUpdate(){
      console.log("lifecycleA componentDidUpdate")
   }
   changeState=()=>{
      this.setState({
         Name:'pythonlife'
      })
   }
   render(){
      console.log("lifecycleA render")
      return (
            <div>
                <div>LifecycleA</div>
      
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />

            </div>
      )
   }
}
export default LifecycleA
