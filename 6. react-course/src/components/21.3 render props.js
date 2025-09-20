/*
  Render Props

The term "render prop" refers to a technique for sharing code between React component using a prop whose
value is a function. A component with a render prop takes a function that returns a react element and calls
 it instead of implementing its own rende logic.
*/

import React, { Component } from "react";

class Rpcount extends Component {
    constructor(props){
        super(props)

        this.state = {
            Count : 0
        }
    }

    incrementCount =()=>{
        this.setState(prevState =>{
            return {Count:prevState.Count+1}
        })
    }
    render(){
        return(
            <div>
                {this.props.render(this.state.Count , this.incrementCount)}
            </div>
        )
    }
}
export default Rpcount