import React from "react";
import logo from "../assets/logo.svg";

const navbarOptions =[
  {
    iconName: "person_outline",
    label: "Sign-in"
  },
  {
    iconName: "shopping_bag",
    label: "Cart"
  },
  {
    iconName: "support",
    label: "Help"
  },
  {
    iconName: "search",
    label: "Search"
  },
  
]
const Navbar = (props) => {
  return (
    <div>
      <section className="navbar">
        <div className="container">
          <img className="logo" src={logo} />
          <div className="location">
            <span className="city">{props.city}</span>
            <span className="state">{props.state}, {props.country}</span>
          </div>
          <div className="navbar-options">
            {navbarOptions.map((element) => (
              <div key={element.iconName} className="navbar-option">
                <span className="material-icons">{element.iconName}</span>{element.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
