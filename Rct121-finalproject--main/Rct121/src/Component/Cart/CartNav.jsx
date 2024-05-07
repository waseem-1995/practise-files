import React from "react";
import {
  AddressCheckout,
  BagCheckout,
  DotsCheckout,
  Logo,
  NavCheckOutSteps,
  NavContainer,
  NavLogo,
  NavSecure,
  PaymentCheckout,
  SecureLogo,
  SecureN
} from "./CartNav.element";

import Logoimg from "../../Images/Logoimg.png";
import order from "../../Images/order.png";
import { useNavigate } from "react-router-dom";

const CartNav = () => {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <NavLogo>
        <Logo src={Logoimg} onClick={() => navigate("/")} />
      </NavLogo>
      <NavCheckOutSteps>
        <BagCheckout>BAG</BagCheckout>
        <DotsCheckout>---------</DotsCheckout>
        <AddressCheckout>ADDRESS</AddressCheckout>
        <DotsCheckout>---------</DotsCheckout>
        <PaymentCheckout>PAYMENT</PaymentCheckout>
      </NavCheckOutSteps>
      <NavSecure>
        <SecureLogo src={order} />
        <SecureN>100% SECURE</SecureN>
      </NavSecure>
    </NavContainer>
  );
};

export default CartNav;
