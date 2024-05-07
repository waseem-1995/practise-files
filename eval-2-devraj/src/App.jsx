import React from "react";
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./components/Products/Products"
import Navbar from "./components/Navbar/Navbar"


function App() {
  return <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/products" element={<Products/>}></Route>
    </Routes>
    {/* code here */}
    </div>;
}

export default App;