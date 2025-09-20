/*
 Higher-order components (HOCs) are a powerful feature of the React library. They allow you to reuse component
 logic across multiple componenets. In React, a higher-order component is a function that takes a component
 as an argument and returns a new component that wraps the original component.

 Higher-order components (HOCs)
 To share common functionality between components.
 Const NewComponent = higherOrderComponent(OriginalComponent).

 if want many(10) different component. write a code many time. that time use Hocs to reduce the code.
 */

import React from "react";

const updatedComponenet = OriginalComponent =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)

            this.state = {
                Count:0
            }
        }
        incrementCount = () =>{
            this.setState(prevState => {
                return {Count : prevState.Count +1}
            })
        }
        render(){
            return <OriginalComponent Count={this.state.Count} incrementCount={this.incrementCount}/>
        }
    }   
    return NewComponent
}
export default updatedComponenet
