import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message:'Hello'
        }
        // this.clickhandler=this.clickhandler.bind(this)  //3rd method
    }
    clickhandler(){
        this.setState(
            {
               message:'Good bye'
            }
        )
        console.log(this)
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}>Click </button>    */}
                <button  onClick={()=>this.clickhandler()}>Click2  </button>
                {/* <button onClick={this.clickhandler}>click3 </button> */}  
            </div>
        )
    }
}
export default EventBind


/**
 there are three ways to representing the eventBind
 1.bind method
 2. use arrow func
 3. inside of constructor
 */