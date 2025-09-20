/*
normal example of render props
*/

import React, { Component } from "react";
/*
class Hovercountertwo extends Component {
    constructor(props){
        super(props)

        this.state ={
            Count :  0
        }
    }

    incrementCounttwo = ()=>{
        this.setState(prevState =>{
            return {Count: prevState.Count +1}
        })
    }
    render(){
        const {Count}= this.state
        return <h2 onMouseOver={this.incrementCounttwo}>Hover {Count} Counter</h2>
    }
}
export default Hovercountertwo
*/


// example of render props
class Hovercountertwo extends Component {
    render(){
        const {Count,incrementCount} =this.props
        return <h2 onMouseOver={incrementCount}>Hover {Count} Counter1</h2>
    }
}
export default Hovercountertwo