import './App.css';
import { Counter } from './Components/Counter';
import { Todo } from './Components/Todos';

function App() {
  return (
    <div className="App">
     <Counter />
     <hr />
     <Todo />
    </div>
  );
}

export default App;
