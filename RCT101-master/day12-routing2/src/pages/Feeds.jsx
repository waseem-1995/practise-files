import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Feeds = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  return(
    <>
    {isAuth ? <div>Feeds</div> : navigate("/login")}
    </>
    )
};

export default Feeds;
