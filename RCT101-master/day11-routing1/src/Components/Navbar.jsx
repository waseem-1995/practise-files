import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    if(id == 0){
      navigate("/products/0")
    }else if(id == 1){
      navigate("/products/1")
    }
  };
  return (
    <div style={{display:"flex"}}>
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to={"/about"} style={{ textDecoration: "none" }}>
        About
      </Link>
      <Link to={"/products"} style={{ textDecoration: "none" }}>
        Products
      </Link>
      <button onClick={() => handleClick(0)}>Go to Product 1</button>
      <div onClick={() => handleClick(1)}>
        Go to Product 2
      </div>
    </div>
  );
};

export default Navbar;
