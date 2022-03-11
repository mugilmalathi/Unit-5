import logo from './logo.svg';
import './App.css';



import { Body, Button } from './Components/Button';
import { useState } from 'react';


function App() {

 const [theme, setTheme] = useState("light || green || indianred || white ");
 
 return (
   <div className='App'>
           <Button theme={theme} onClick={()=>{
              setTheme(theme === "light" ?"dark" :"light")
            }}>Change Color</Button>

     </div>
 )
}

export default App;