import logo from "./logo.svg";
import "./App.css";
import Admin from "./Pages/Admin";
import MainRoute from "./Pages/MainRoute";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="App">
    <Navbar/>
<MainRoute/>
      
    </div>
  );
}

export default App;
