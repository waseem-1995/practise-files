import React, {useContext} from "react";
import { Button } from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const {addToCart} = useContext(CartContext)
  return (
    <div>
      <Button
        fontSize="14px"
        h="30px"
        bg="transparent"
        border="1px solid black"
        onClick={addToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Cart;
