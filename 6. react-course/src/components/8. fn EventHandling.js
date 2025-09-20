/*
import React from 'react'
function FuncClick(){
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
export default FuncClick
*/




//example of arrow function

import React, { useState } from "react";

let FuncClick = ()=>{

    let [state , setState] = useState({
        count :0
    })

    let increment =()=>{
        setState((state)=>({
            count : state.count+1
        }))
    }

    let decrement =()=>{
        setState((state)=>({
            count : state.count-1
        }))
    }
    return(
        <React.Fragment>
            <div>
                <p>Counter</p>
                <h1>{state.count}</h1>
                <button onClick={increment}>Incremment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </React.Fragment>
    )
}
export default FuncClick
