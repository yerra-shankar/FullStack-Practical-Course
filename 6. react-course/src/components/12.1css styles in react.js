/*
  CSS Stylesheets in react

  1st. CSS StyleSheets (and also we use props)
  2nd. Inline styling
  3rd. Css Modules
  4th. Css in js library
*/

//1st approch

import React from 'react'
import './12.2 mystyles.css'
/*
function Stylesheet() {
    return(
        <div>
            <h1 className='primary'>stylesheet</h1>
        </div>
    )
}
export default Stylesheet
*/
/*
//props
function Stylesheet(props) {
    let className=props.primary ? 'primary':''
    return(
        <div>
            <h1 className={className}>stylesheet1</h1>
        </div>
    )
}
export default Stylesheet
*/

//if u want multiple classes
function Stylesheet(props) {
    let classNames=props.primary ? 'primary':''
    return(
        <div>
            <h1 className={`${classNames} font-xl`}>stylesheet2</h1>
        </div>
    )
}
export default Stylesheet




