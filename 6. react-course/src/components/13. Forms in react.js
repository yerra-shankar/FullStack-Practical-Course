/*
  Forms in react
  In React, from data is usually handled by the components. when the data is handled by the componenets, 
  all the data is stored in the component state. you can control changes by adding event handlers in the 
  onchange attribute.
*/

import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserName: '',
            Comments:'',
            Topic:'react',
        }
    }
    handlerUsernameChange = (Event) => {
        this.setState({
            UserName: Event.target.value
        })
    }
    handleCommentsChange = (Event) => {
        this.setState({
            Comments: Event.target.value
        })
    }
    handleTopicChange = (Event) => {
        this.setState({
            Topic:Event.target.value
        })
    }
    handleSubmit =Event=>{
        alert(`${this.state.UserName} ${this.state.Comments} ${this.state.Topic}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <lable>UserName</lable>
                    <input type='text' value={this.state.UserName} onChange={this.handlerUsernameChange} />
                </div>

                <div>
                    <label>Comments</label>
                    <textarea value={this.state.Comments} onChange={this.handleCommentsChange}></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.Topic} onChange={this.handleTopicChange}>
                        <option value="react">react</option>
                        <option value="python">python</option>
                        <option value="javascript">javascript</option>
                    </select>
                </div>

                <button type='submit'>submit</button>
            </form>
        )
    }
}
export default Form
