import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';


function App() {
   const [counter, setCounter] = useState(0);
 const ref = useRef(null);

 useEffect(()=>{
   startTimer();
 }, []);
   
 const startTimer = ()=>{
  ref.current = setInterval(()=>{
    setCounter((prev) => prev + 1);
  },1000);
}
  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
     <button 
     onClick={()=>{
       clearInterval(ref.current);
     }}
     >
       Stop
       </button>

       <button onClick={startTimer}>
         Start
         </button>

         <button onClick={()=>{
          clearInterval(ref.current);
          setCounter(0);
         }}
         >
           Reset
           </button>
    </div>
  );
}

export default App;
