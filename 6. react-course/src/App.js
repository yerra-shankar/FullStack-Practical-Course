// import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.  
          Hello world
        </p>
        <a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>  


  );
}

export default App;   

*/






// 1.
// create a component file and use stateless functional components
// importing the greet file in component folder

// import Greet from './components/1 func-component';

// taking default names
//  import Mycomponent from './components/1 func-component';

// direct export method
  //  import { Greet } from './components/1 func-component';

// function App() {
//   return (
//     <div className="App">
//          {/* {/* <Greet></Greet>  or } */}
//          <Greet/>
//         {/* {/* /* <Mycomponent />  } */}
//         {/* {/* <Greet/> } */}

//     </div>
//   )
// }
// export default App;  









// 2.
// example of class component

// 2. class Components
/*
import Greet1 from './components/2 class-component';

function App() {
  return(
    <div className="App">
      <Greet1/>
    </div>
  )
}
export default App;
*/







// 3.
// example of JSX
/*
import Hello from './components/3 jsx';
function App() {
  return (            
    <div className="App">        
      <Hello/>
    </div>       
  )
}
export default App;
*/






/*
// 4.
// example of props and reusable

import Fun from './components/4. props and reusable using fn ';
import Fun1 from './components/4. props using class';

function App() {
  return (
    <div className="App">
      <Fun>
        <p>example of reusable</p>
      </Fun>
      <Fun/> 
      <Fun/>{/*    it is called reusable }


      {/*  example of props using functional component } 
      <Fun name="shankar" city="andhra pradesh">
        <p>example of props using functional component 4,5,6</p>
      </Fun>
      <Fun name="saketh" city="vizag">
        <button>just adding nrml button</button>    
      </Fun>
      <Fun name="siva" city="gajuwaka"/>


    {/* example of props using class component }
    <p>example of props using class component 7,8,9</p>

    <Fun1 name="shankar" city="andhra pradesh1"></Fun1>
    <Fun1 name="saketh" city="vizag1"/>
    <Fun1 name="siva" city="gajuwaka1"/>
    
    </div>
  );
}
export default App
 */





/*
// 5.
// Example of State

import Message from './components/5. State';
function App() {
  return(
    <div className="App">
      <Message />
    </div> 
  )
}
export default App
*/






/*
// 6.
// example of setstate
import Counter from './components/6.  setstate';
function App(){
  return(
    <div className='App'>
      <Counter />
    </div>
  )
}
export default App
*/






/*
// 7.
// example of functional destructuring
import Destruct from './components/7. Destructuring props & state';
function App(){
  return(
    <div className='App'>
      <Destruct name='shankar' city='Andhra Pradesh'/>
    </div>
  )
}
export default App
*/
/*
//7 .
//example of class destructuring
import Destruct1 from './components/7. Destructuring props & state';
function App(){
  return(
    <div className='App'>
      <Destruct1 name='shankar' city='vizag' />
    </div>
  )
}
export default App
*/





/*
// 8.9
// example of func and class eventhandling
import FuncClick from './components/8. fn EventHandling';    
// import ClaasClick from './components/9. class EventHandling';  

function App(){
  return(
    <div className='App'>
      <FuncClick />
      {/* <ClaasClick /> }
    </div>
  );
}
export default App;
*/
/*
// 9.
//example of eventbind
import EventBind from './components/9. EventBind';
function App(){
  return(
    <div className='App'>
      <EventBind />
    </div>
  );
}
export default App;
*/





/*
//10.
// Example of conditional rendering
import UserGreeting from './components/10. Conditional Rendering';
function App() {
  return(
    <div className='App'>
      <UserGreeting />
    </div>
  )
}
export default App
*/





/*
//11.
// example of List rendering
import NameList from './components/11. List Rendering';
function App(){
  return(
    <div className='App'>
      <NameList />
    </div>
  )
}
export default App
*/





/*
//12.
//example of stylesheet in react
import Stylesheet from './components/12.1css styles in react';
function App() {
  return(
    <div className="App">
      {/* <Stylesheet /> }
      <Stylesheet primary={true}/> 
    </div>
  )
}
export default App
*/
/*
//12.3
//example of inline css
import Inline from './components/12.3 inline';
function App(){
  return(
    <div className='App'>
      <Inline />
    </div>
  )
}
export default App
*/
/*
//12.4
//example of css module 
import './12.4 appstyles.css';
import Styles from './12.4appstyles.module.css';
function App() {
  return (
    <div className="App">
      <h1 className="error">Example of regular CSS</h1>
      <h1 className={Styles.success}>Success</h1>
    </div>
  );
}

export default App;
*/
/*
// if u add inline 
import './12.4 appstyles.css';
import Styles from './12.4appstyles.module.css';
import Inline from './components/12.3 inline';

function App() {
  return (
    <div className="App">
      <h1 className="error">Example of regular CSS</h1>
      <h1 className={Styles.success}>Success</h1>
      <Inline />
    </div>
  );
}

export default App;
*/





/*
//13
//example of form in react
import Form from './components/13. Forms in react';
function App(){
  return(
    <div className='App'>
      <Form />
    </div>
  )
}
export default App
*/





/*
//14.1
//example of Mounting lifecycle
import LifecycleA from './components/14.1 lifecycleA';

function App(){
  return(
    <div className='App'>
      <LifecycleA />
    </div>
  )
}
export default App

*/



/*
//15
// Example of fragment
import Fragment from './components/15. fragment';
// 2nd example
// import Table from './components/15.1 tableDemo';
function App(){
  return(
    <div className='App'>
      <Fragment />
      {/* <Table />  }
    </div>
  )
}
export default App
/** */





/*
//16
//exanmple of PureComponent
// import Purecomp from './components/16. pure Component';
import Parentcomp from './components/16.2 parent component';
function App(){
  return(
    <div className='App'>
      {/* <Purecomp /> }
      <Parentcomp />
    </div>
  )
}
export default App

*/




/*
//17
//example of refs
import RefsDemo from './components/17 refs ';

function App(){
  return(
    <div className='App'>
      <RefsDemo />
    </div>
  )
}
export default App
*/
/*
//17.1 and 2
import Focus from './components/17.2 parentfocusinput';

function App(){
  return(
    <div className='App'>
      <Focus />
    </div>
  )
}
export default App
*/




/*
//18.
//example of forward refs
import Frparentinput from './components/18.1 FRparentinput';

function App(){
  return(
    <div className='App'>
      <Frparentinput />
    </div>
  )
}
export default App
*/




/*
//19
//example of portal
import PortalDemo from './components/19. portalsDemo';

function App(){
  return(
    <div className='App'>
      <PortalDemo />
    </div>
  )
}
export default App
*/





/*
//20
//example of Higher order component
import ClickCounter from './components/20. HOC clickcounter';
import Hovercounter from './components/20.1 HOC hovercounter';

function App(){
  return(
    <div className='App'>
      <ClickCounter />
      
      <Hovercounter/>
    </div>
  )
}
export default App
*/





// 21 
//example of render props
/*
import ClickCounterTwo from './components/21. rp click counter';
import Hovercountertwo from './components/21.1 rp hover counter';
import User from './components/21.2 rp user';
import Rpcount from './components/21.3 render props';

function App(){
  return(
    <div className='App'>
         {/* <ClickCounterTwo />   
      {/* <Hovercountertwo /> 
      {/* <User name="shankar1" /> 

      {/* using function }
      {/* <User name={()=> "shankar2"} /> 

      {/* passing the parameter }
      {/* <User name={(isloggedIn)=> isloggedIn ? "pythonlife" : "Guest"}/> 

      {/* using render  
       {/* <User render={(isloggedIn) => isloggedIn ? "pythonlife1" : "Guest1"} />  


       {/*  example of render props  
{/*        
      <Rpcount 
      render = {(Count,incrementCount)=>(
        <ClickCounterTwo Count={Count} incrementCount ={incrementCount} />
      )} />

      <Rpcount 
      render = {(Count,incrementCount)=>(
        <Hovercountertwo Count={Count} incrementCount ={incrementCount} />
      )} />  
    </div>
  )
}
export default App
*/







//22
//example of context in React

import ComponentC from './components/22.1 component C ';
import { UserProvider } from './components/22.4 context';

function App(){
  return(
    <div className='App'>
      <UserProvider value="pythonlife">
        <ComponentC/>
      </UserProvider>
    
    </div>
  )
}
export default App





//practice

// import Practice from './components/23.practice';
// function App(){
//   return(
//     <div className='App'>
//       <Practice />
//     </div>
//   )
// }
// export default App