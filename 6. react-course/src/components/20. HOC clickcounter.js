//normalexample for higher order component 
/*
import React, { Component } from "react";
class ClickCounter extends Component {
   constructor(props){
        super(props)

        this.state = {
            Count:0
        }
    }
    incrementCount =() =>{
        this.setState(prevState =>{
            return {Count : prevState.Count +1}
        })
    } 
    render(){
        const { Count } =this.state
        return <button onClick={this.incrementCount}>{this.props.name} Click {Count} times</button>
    }
}
export default ClickCounter
*/


//example of higher-order component
import React, { Component } from "react";
import updatedComponenet from "./20.2 higher-order components";

class ClickCounter extends Component {
    
    render(){
        const {Count,incrementCount}=this.props
        return <button onClick={incrementCount}> Click {Count} times1</button>
    }
}
export default updatedComponenet(ClickCounter)
