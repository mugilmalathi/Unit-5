import './App.css';
// import { Todos } from './components/Todos';
import { Groceries } from './components/Groceries';


function App() {
  var num = 5;
  return (
    <div className="App">
      <Groceries/>
      {/* <Todos/> */}
    </div>
  );
}

export default App;