import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import './Components/Todo.css'
import Sprint1Day3 from './Assignments/PaymentCard/Sprint1day3'
// import Counter from './Components/Counter'
// import { useState } from 'react';

function App() {

  // const[toggle, setToggle] = useState(false)


  return (
    <div className="App">
      {/* <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Show Counter App' : 'Show Todo App'}
      </button> */}
      <Todo/>
      {/* <Sprint1Day3/> */}
    </div>
  );
}

export default App;
