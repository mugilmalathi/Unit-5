import logo from './logo.svg';
import './App.css';
import { Forms } from './components/Forms';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  return (
    <div className="App">
      <Forms/>
    </div>
  )
}

export default App;
