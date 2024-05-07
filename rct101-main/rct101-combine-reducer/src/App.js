import { Route, Routes, useNavigate } from "react-router-dom"; 
import './App.css';
import Login from './components/Login';
import Page from './components/Page';
import Private from "./hoc/Private";

function App() {
 
  

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Private><Page/></Private>} ></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
