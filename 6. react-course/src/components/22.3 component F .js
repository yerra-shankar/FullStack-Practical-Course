import React, {Component} from "react";
import { UserConsumer } from "./22.4 context";

class ComponentF extends Component{
    render(){
        return(
            <UserConsumer>
                {userna =>{
                      return <div>Hello {userna} </div>
                    }
                }
            </UserConsumer>
        )
    }
}
export default ComponentF
