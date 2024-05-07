import React from 'react'
import { Link } from 'react-router-dom'
import "./box.css"
const Products = ({singletake}) => {
    
    const {name,price,id,img} = singletake
  

  return (
    <Link to={img != null ? `/${id}`: ""} className='detail'>
      <><h1>{name}</h1><h4>{price}</h4></>
    </Link>
  )
}

export default Products
