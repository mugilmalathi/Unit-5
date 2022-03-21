import logo from './logo.svg';
import './App.css';
import { Button } from './components/Body/Button';
import { Auth } from './components/Navbar/Auth';

function App() {
  return (
    <div className="App">
      <Auth/>
      <Button/>
    </div>
  );
}

export default App;
