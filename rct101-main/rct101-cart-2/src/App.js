import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';

function App() {

  const [products,setproducts] = useState([])
  const take = async () => {
      try {
          const res = await fetch("http://localhost:8080/poducts")
          const data = await res.json();
          setproducts(data)
      } catch (error) {
          
      }
  }

  useEffect(() => {
     take()
  },[])


  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/products' element={products.map((e) => <Products key={e.id} singletake={e}/>)}></Route>
       <Route path='/:id' element={<Product/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
