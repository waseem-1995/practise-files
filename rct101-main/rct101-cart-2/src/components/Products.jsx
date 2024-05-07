import React from 'react'
import { Link } from 'react-router-dom'
import "./box.css"
const Products = ({singletake}) => {
    
    const {title,Dprice,id,img} = singletake
  

  return (
    <Link to={img != null ? `/${id}`: ""}>
      <div  className='detail'><h1>{title}</h1><h4>₹{Dprice}</h4></div>
    </Link>
  )
}

export default Products
