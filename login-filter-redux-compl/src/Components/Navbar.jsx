import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Blah>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          gap:"60px",
          marginLeft:"30px",
          borderBottom: "2px solid black",
          width:"100%",
          marginBottom:"40px",
          marginTop:"40px"
          
        }}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/add-product"}>Add Product</Link>
      </div>
    </Blah>
  );
};
const Blah = styled.div`
  display: flex;
  ${"" /* border:2px solid red; */}
  justify-content: space-around;
`;
export default Navbar;
