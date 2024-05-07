import React from "react";
import MainRoute from "../Pages/MainRoute";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div style={{display:"flex"}}>
    
     
        {/* <MainRoute /> */}
        <div style={{width:"15%"}}>

        <Sidebar />
        </div>
        <div style={{width:"85%"}}>

        <ProductList />
        </div>
    
    </div>
  );
};

export default Home;
