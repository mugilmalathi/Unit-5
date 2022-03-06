import logo from './logo.svg';
import './App.css';

function App() {

  const mobile = ["Android", "Black Berry", "iPhone", "Windows phone"];
  const manu = ["samsung", "htc", "iPhone", "nokia"]

  return (
    <div className='App'>
      <h1>Mobile Operating System</h1>
      <ul>{
       mobile.map ((e)=>(
          <li className='list1'>{e}</li>
        ))}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>{
       manu.map ((e)=>(
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
