import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link"><Link to="/">Home</Link></a>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">Cart:{}</div>
        <button data-cy="navbar-login-logout-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
