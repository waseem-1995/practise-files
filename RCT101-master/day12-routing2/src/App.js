import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feeds from './pages/Feeds';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="feeds" element={<Feeds/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
