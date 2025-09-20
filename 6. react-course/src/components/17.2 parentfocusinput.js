import React, { Component } from "react";
import Input from "./17.1 childinputref";

class Focus extends Component {
    constructor(props){
        super(props)

        this.componentref = React.createRef()
    }
    clickhandler = () =>{
        this.componentref.current.focusInput()
    }
    render(){
        return(
            <div>
                <Input ref={this.componentref}/>
                <button onClick={this.clickhandler}>Focus Input</button>
            </div>
        )
    }
}
export default Focus