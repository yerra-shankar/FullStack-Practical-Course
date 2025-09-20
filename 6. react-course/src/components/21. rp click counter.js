// normal example of render prop 

import React, { Component } from "react";
/*
class ClickCountertwo extends Component {
    constructor(props){
        super(props)

        this.state ={
            Count : 0
        }
    }
    incrementCounttwo =()=>{
        this.setState(prevState =>{
            return {Count : prevState.Count +1}
        })
    }
    render(){
        const {Count} = this.state
        return <button onClick={this.incrementCounttwo}>Click {Count} times</button>
    }
}
export default ClickCountertwo
*/


class ClickCounterTwo extends Component {
    render(){
        const {Count,incrementCount} = this.props
        return <button onClick={incrementCount}>Click {Count} times</button>
    }
}
export default  ClickCounterTwo