import './App.css';
import {Routes, Route} from "react-router-dom";
import Mens from './components/Mens';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mens />} />
    </Routes>
  );
}

export default App;
