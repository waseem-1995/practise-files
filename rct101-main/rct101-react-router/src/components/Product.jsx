import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./box.css";

const Product = () => {
    const [data,setdata] = useState([])
    const {id} = useParams();
   console.log(data)
    const takedetail = async () => {
        try {
            const res = await fetch(`http://localhost:8080/poducts/${id}`)
            const datas = await res.json();
            console.log(datas)
            setdata(datas)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        takedetail();
    },[])


  return (
    <div>
      <div className='detail'>
              <img src={data.img} alt="img" /><br/>
              <h1>{data.name}</h1>
              <h4>{data.price}</h4>
          </div>
  
    </div>
  )
}

export default Product
