import React from "react";
import {
  AddressCheckoutO,
  ButtonDiv,
  Container,
  ContiShop,
  DotsCheckoutO,
  OrderC,
  OrderCBS,
  OrderCM,
  OrderConfirmdiv,
  PaymentCheckoutO
} from "./OrderConfirm.element";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
import CartFoot from "../Cart/CartFoot";
import {
  BagCheckout,
  Logo,
  NavCheckOutSteps,
  NavContainer,
  NavLogo,
  NavSecure,
  SecureLogo,
  SecureN
} from "../Cart/CartNav.element";
import Logoimg from "../../Images/Logoimg.png";
import order from "../../Images/order.png";
const OrderConfirm = () => {
  const navigate = useNavigate();

  const contiShop = () => {
    navigate("/");
  };
  return (
    <Container>
      <NavContainer>
        <NavLogo>
          <Logo src={Logoimg} onClick={() => navigate("/")} />
        </NavLogo>
        <NavCheckOutSteps>
          <BagCheckout>BAG</BagCheckout>
          <DotsCheckoutO>---------</DotsCheckoutO>
          <AddressCheckoutO>ADDRESS</AddressCheckoutO>
          <DotsCheckoutO>---------</DotsCheckoutO>
          <PaymentCheckoutO>PAYMENT</PaymentCheckoutO>
        </NavCheckOutSteps>
        <NavSecure>
          <SecureLogo src={order} />
          <SecureN>100% SECURE</SecureN>
        </NavSecure>
      </NavContainer>
      <OrderConfirmdiv>
        <OrderCBS>
          <CheckCircleOutlineIcon
            sx={{ width: "55px", height: "55px", color: "#ff3f6c" }}
          />
          <OrderC>Order Confirmed</OrderC>
          <OrderCM>Your order is confirmed.</OrderCM>
          <ButtonDiv>
            <ContiShop onClick={contiShop}>CONTINUE SHOPPING</ContiShop>
          </ButtonDiv>
        </OrderCBS>
      </OrderConfirmdiv>
      <CartFoot />
    </Container>
  );
};

export default OrderConfirm;
