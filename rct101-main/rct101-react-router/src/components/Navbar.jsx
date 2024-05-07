import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   

  return (
    <div>
      <Link to={"/"} >Home</Link> <br/>
      <Link to={"/products"}>Products</Link>
    </div>
  )
}

export default Navbar
