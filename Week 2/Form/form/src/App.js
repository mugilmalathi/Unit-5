import logo from './logo.svg';
import './App.css';
import { Forms } from './components/Forms';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  const [show, setShow] = useState([]);

  useEffect(()=>{
    axios
    .get("http://localhost:5000/groceries")
    .then(res=>{
      setShow(res.data);
    })
}, [])


  return (
    <div className="App">
      <Forms/>

      <div className='showData'>
      {show.map((e) =>(
                <Forms setShow = {e} />
            ))}
      </div>
    </div>
  );
}

export default App;
