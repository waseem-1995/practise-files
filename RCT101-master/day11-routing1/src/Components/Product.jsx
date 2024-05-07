import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const [prod, setProd] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProd(data));
    }
  }, [id]);

  return (
    <div>
      Product Id : {id}
      <div>Name : {prod.name}</div>
      <div>Price : {prod.price}</div>
    </div>
  );
};

export default Product;
