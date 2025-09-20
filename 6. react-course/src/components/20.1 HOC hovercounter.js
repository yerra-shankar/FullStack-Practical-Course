//2nd normal example of higher order component

// import React, { Component  } from "react";
// import updatedComponenet from "./20.2 higher-order components";
/*
class Hovercurrent extends Component{
    constructor(props){
        super(props)

        this.state = {
            Count : 0
        }
    }
    incrementCount =()=>{
        this.setState(prevState =>{
            return {Count : prevState.Count +1}
        })
    }  
    render(){
        const {Count} = this.state
        return <h2 onMouseOver={this.incrementCount}>{this.props.name} Hover {Count} counter</h2>
    }
}
export default updatedComponenet(Hovercurrent)
*/

//example of higher-order component
import React, { Component } from "react";
import updatedComponenet from "./20.2 higher-order components";

class Hovercounter extends Component{
    render(){
        const {Count,incrementCount} = this.props
        return <h2 onMouseOver={incrementCount}>Hover {Count} Counter1</h2>
    }
}
export default updatedComponenet(Hovercounter)
