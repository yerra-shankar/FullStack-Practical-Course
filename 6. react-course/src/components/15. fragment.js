import React from 'react'
/*
function Fragment(){
    return(
        <React.Fragment>
            <h1>Fragment </h1>
            <p>This describes the fragment component</p>
        </React.Fragment>
    )
}
export default Fragment
*/

// keyed fragment
//Note:- Key is the only attributes that can be passed with the fragments

function Fragment(){
    const items=[]
    return(
        <React.Fragment>
            {
                items.map(item=>(
                    <React.Fragment key={item.id}>
                        <h1>title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <h1>Fragment1</h1>
            <p>This describes the fragment component</p>
        </React.Fragment>
    )
}
export default Fragment