// props and reusable using class component
import React,{ Component} from 'react'
class Fun1 extends Component {
    render (){
        return <h1>Hii {this.props.name} {this.props.city} {this.props.children} </h1>
    }
}
export default Fun1  
