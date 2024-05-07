import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login")
    }
  return (
    <div style={{
        display:"flex",
        border: "1px solid red",
        fontSize:"20px",
        justifyContent:"space-around",
        padding:"0 20%"
    }}>
        Navbar  
        <Link to="/">Home</Link>  
        <Link to="feeds">Feed</Link>
        <button onClick={handleLogin}>Login</button>  
    </div>
  )
}

export default Navbar