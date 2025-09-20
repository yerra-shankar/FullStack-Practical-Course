import React, { Component } from 'react';
class ClaasClick extends Component{
    clickHand(){
        console.log('clicked the button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHand}>Click me</button>
            </div>
        )
    }
}
export default ClaasClick

