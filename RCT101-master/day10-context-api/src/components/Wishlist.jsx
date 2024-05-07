import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Wishlist = () => {
  const {count} = useContext(CartContext)
 
  return <div>Cart Items : {count}</div>;
};

export default Wishlist;
