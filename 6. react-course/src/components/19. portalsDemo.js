  /*
Portals in React
In React, portals can be used to render an element outside of its parent component's DOM node while preserving
its position in the React hierarchy, allowing it to maintain the properties and behaviours it inherited 
from the React tree.

*/
import React from "react";
import ReactDOM from 'react-dom'

function PortalDemo (){
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>,
        document.getElementById('portal-root')
    )
}
export default PortalDemo