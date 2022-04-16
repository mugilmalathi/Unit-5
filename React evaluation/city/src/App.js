import { Route, Router, Routes } from 'react-router';
import './App.css';
import { City } from './components/City/City';
import { Country } from './components/Country/Country';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path={'/'} element={<Home />} />
       <Route path={'/city'} element={<City />} />
       <Route path={'/country'} element={<Country />} />
     </Routes>
    </div>
  );
}

export default App;
