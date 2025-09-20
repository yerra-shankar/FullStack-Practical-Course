//props and reuseable using functional

import React from 'react'
// function Fun(){
//     return <h1>Hello react js (reusable)</h1>
// }
// using props in functional compnonet
const Fun=(props)=>{
    console.log(props)
    return (
        <div>
            <h1>hello react js {props.name} {props.city}</h1>
             {props.children}
       </div>
    )

}
export default Fun 

