/*
      Props vs State

    ----Props---                                              ----state----
 1. props get passed to the component                 1. State is managed within the component variable
 2. Function parameters.                                 declared in the function body
 3. props are immutable.                              2. State can be changed
 4. props-functional Components.                      3. useState Hook-Functional Components
 5. this.props-Class Components.                          this.state-Class components
*/

import React, { Component } from 'react'
/*
class Message extends Component {
    constructor() {
        super()
        this.state = {
            Message: 'welcome vistor'
        }
    }
    changeMessage(){
        this.setState( 
            {
                Message:'Thanks for subscribing'
            }
        )
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.Message}
                </h1>
                <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}
export default Message
*/





//2nd example 

class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employee: [
                {
                    name: 'shankar',
                    age: 22

                },
                {
                    name: 'siva',
                    age: 24
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <span>Name : {this.state.employee[0].name} </span>
                <span>Age: {this.state.employee[0].age} </span> <br/>
                <span>Name :{this.state.employee[1].name}</span>
                <span>Age :{this.state.employee[1].age}</span>
            </React.Fragment>
        )
    }
}
export default Message