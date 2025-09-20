import React, { Component } from 'react'
//rce
class Counter extends Component {
    //  rconst
    constructor(props) {
        super(props)

        this.state = {
            Count: 0
        }
    }
    
    Increment(){
        this.setState(
            {
                Count:this.state.Count+1
            },()=>{console.log('Callback value',this.state.Count)}
        )                                    //    ||
        // console.log(this.state.Count)     //both are worked
    }
    render() {
        return (
            <div>
                <div>
                    <h1>count-{this.state.Count}</h1>
                </div>
                <button onClick={()=>this.Increment()}>increment</button>
            </div>
        )
    }
}

export default Counter
