import React, { Component } from "react";

class LifecycleB extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'shankar'
        }
        console.log("lifecycleB constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("lifecycleB componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("lifecycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }
    render(){
        console.log("lifecycleB render")
        return (
            <div>
                <div>LifecycleB</div>
            </div>
        )
        
    }
}
export default LifecycleB
