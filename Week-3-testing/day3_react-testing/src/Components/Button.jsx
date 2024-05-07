import React from "react";
import "./Button.css";

const Button = ({ children, variant, colorScheme, onClick }) => {
  return (
    <button
      data-testid="cButton"
      className={`btn ${colorScheme || "red"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

// Shoes[({}, {})];

// ShoeCard({id});
// let shoeCard = id;
// {
//     <div data ></div>
// }
// const shoeData = useSelector(state => state.shoes)

