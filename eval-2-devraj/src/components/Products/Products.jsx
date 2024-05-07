import React from "react";
import data from "../../../db.json"
import Product from "./Product/Product";

const Products = () => {

console.log(data.products)

  return <div>{/* here */}
  {data.products.map((el)=>{
    return(
<Product id={el.id} name={el.name} description={el.description}/>
    )
    
  })}
  </div>;
};

export default Products;
