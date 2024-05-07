import { Heading, Image } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const ProductCard = ({ image, brand, price, category, description }) => {
  return (

    <div style={{border:"2px solid black",padding:"5px ",margin:"auto"}}>
      <img src={image} alt="" />
      <h1>Brand: {brand}</h1>
      <h1>Price: {price}</h1>
      <h1>{category}</h1>
      <h1>{description}</h1>
    </div>
  );
};
// const Blah = styled.div`
// textAlign:center;
// `
export default ProductCard;
