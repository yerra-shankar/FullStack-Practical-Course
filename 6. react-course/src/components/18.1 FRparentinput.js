import React, { Component} from "react";
import Frinputs from "./18. forwading refs";

class Frparentinput extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    clickhandler = ()=>{
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <Frinputs ref ={this.inputRef}/>
                <button onClick={this.clickhandler}>Focus1 Input</button>
            </div>
        )
    }
}
export default Frparentinput