import React, { useContext } from "react";
import Wishlist from "./Wishlist";
import { Button, Flex, Box } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  const { buy } = useContext(CartContext);
  const {isLight, toggleTheme} = useContext(ThemeContext)
  return (
    <Flex>
      <Button
        fontSize="14px"
        h="30px"
        bg="transparent"
        border="1px solid black"
        mr="40px"
        onClick={() => {
          if (!isAuth) {
            login("User", "secret");
          } else {
            logout();
          }
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </Button>
      <Button
        fontSize="14px"
        h="30px"
        bg="transparent"
        border="1px solid black"
        mr="40px"
        onClick={buy}
      >
        buy
      </Button>
      <Button
        fontSize="14px"
        h="30px"
        bg="transparent"
        border="1px solid black"
        mr="40px"
        onClick={toggleTheme}
      >
        {`Change ${isLight ? "dark" : "light"}`}
      </Button>
      <Box border="0px solid red">{isAuth && <Wishlist />}</Box>
    </Flex>
  );
};

export default Navbar;
