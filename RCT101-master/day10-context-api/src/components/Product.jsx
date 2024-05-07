import React, {useContext} from "react";
import Cart from "./Cart";
import { AuthContext } from "../context/AuthContext";

const Product = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    <div>
      Product : {isAuth ? "User Logged In" : " User Logged Out"}
      <Cart />
    </div>
  );
};

export default Product;
