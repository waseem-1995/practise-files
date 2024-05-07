import React, {useState, useEffect}from 'react'
import {Link} from "react-router-dom"

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:8080/products")
      let data = await res.json();
      setData(data)
    }
    fetchData();
  },[])
  
  return (
    <div >
      {data.map((el) => (
        <div style={{ border: "1px solid red", width: "fit-content" }} key={el.id}>
          <Link to={`/products/${el.id}`}>{el.name}</Link>
          <p>{el.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Products