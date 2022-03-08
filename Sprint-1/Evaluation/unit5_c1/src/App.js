import logo from './logo.svg';
import './App.css';
import {Books} from './Books';
import {Pens} from './Pens';
import {Notebooks} from './Notebooks';
import {Inkpens} from './Inkpen';

function App() {

  return (
    <div className="App">
      <div className='inven'><h1>Inventory management</h1></div>
      <div className='displayFlex'>
      <Books/>
      <Pens/>
      <Notebooks/>
      <Inkpens/>
      </div>

      <div className="total">Total Items: {}</div>
      
    </div>
  );
}

export default App;
