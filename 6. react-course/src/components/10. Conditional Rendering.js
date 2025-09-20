/*
  Conditional Rendering

  In React, conditional rendering is the process of displaying different content based on certain
   conditions or states.

   1st. if/else.
   2nd. Element variables.
   3rd. Ternary conditional operator.
   4th. short circuit operator.(uses, user rendering something or nothing then use short circuit operator.
   its works only condition is true. if its false nothing is show the browser)
*/


import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        /*
        // 1st approch of conditional rendering using if/else
        if(this.state.isLoggedIn) {
            return <div>welcome pythonlife</div>
        }
        else{
            return <div>welcome guest</div>
        }
        */

        /*
        //2nd approch of conditional rendering using element variable 
        let Message //--- its a variable
        if(this.state.isLoggedIn){
            Message=<div>welcome pythonlife1</div>
        }
        else{
            Message=<div>welcome guest1</div>
        }
        return<div>{Message}</div>
        */

        /*
        //3rd approch of conditional rendering using ternary conditional operator
        return this.state.isLoggedIn ?(
            <div>welcome pythonlife2</div>):(
            <div>welcome guest2</div>
            )
        */

        //4th approch of conditional rendering using short circuit operator
        return this.state.isLoggedIn && <div>welcome pythonlife3</div>
        /*
        return (
            <div>
                <div>
                    welcome pythonlife
                </div>
                <div>welcome guest</div>
            </div>
        )
            */
    }
}
export default UserGreeting