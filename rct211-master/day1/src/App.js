
import './App.css';
import Counter from './Counter';
import React from 'react';
function App() {
  const[show,setShow] = React.useState(false)
  return (
    <div className="App">
    {show && <Counter/>}
    <button onClick={()=>setShow(!show)}>show</button>
    </div>
  );
}

export default App;
