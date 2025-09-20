import React from 'react'

// function Frinputs(){
//     return(
//         <div>
//             <input type="text" />
//         </div>
//     )
// }


const Frinputs = React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})
export default Frinputs