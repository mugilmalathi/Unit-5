import { useState } from 'react';
import './App.css';
// import { Todos } from './components/Todos';
// import { Groceries } from './components/Groceries';
import { Stopwatch } from './components/Stopwatch';


function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <Groceries/> */}
      {/* <Todos/> */}
     { show ? <Stopwatch/> : "" }

     <button className='button_time' onClick={()=>{

       setShow(show ? false : true);
     }}>
       {
         show ? "Hide Timer" : "Show Timer"
         
       }</button>
    </div>
  );
}

export default App;