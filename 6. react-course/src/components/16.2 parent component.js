import React, { Component } from 'react'
import RegComp from './16.1 regular component'
import PureComp from './16. pure Component'
import MemoComp from './16.3 MemoComponet with func'

class Parentcomp extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'shankar'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'shankar1 '
            })
        },2000)
    }
    render(){
        console.log("********Parent component render**********")
        return(
            <div>
                Parent component
                <MemoComp name={this.state.name} />
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        ) 
    }
}
export default Parentcomp
