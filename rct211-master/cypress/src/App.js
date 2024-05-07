
import { useState } from 'react';
import './App.css';


function App() {
  const [counter,setCounter] = useState(10)
  // console.log("dfgbhdfhfg")
  return (
    <div className="App">
    <h1 className='counter_value'>Counter: {counter}</h1>
    <button className='add_btn'  onClick={()=>setCounter(counter+1)}>Add</button>
    <button className='reduce_btn' onClick={()=>setCounter(counter-1)}>Reduce</button>
    </div>
  );
}

export default App;
