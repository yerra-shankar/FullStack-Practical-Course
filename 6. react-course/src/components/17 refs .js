//refs have two approaches and refs not worked on functional component
//1st approach is (createRef)
/*
import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef);

    }
    clickhandler=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div> 
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}
export default RefsDemo
*/



// 2nd approach is (Callback ref)

import React, {Component} from "react";

class RefsDemo extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()

        this.cbRef = null   //1st step for callback ref
        this.setcbRef = (element)=>{    //2nd step 
            this.cbRef = element
        }

    }

    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        if(this.cbRef) {
            this.cbRef.focus()
        }
    }

    Clickhandler=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setcbRef} /> {/* 3rd step*? */}
                <button onClick={this.Clickhandler}>Click</button>
            </div>
        )
    }
}
export default RefsDemo