import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProduct } from "../Redux/Product/action";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // const {products,isLoading,isError} = useSelector((store)=>{
  //     products:store.
  // })
  const { product, isLoading, isError } = useSelector((store) => {
    return {
      product: store.productReducer.product,
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
    };
  });
  const obj = {
    params: {
      category: searchParams.getAll("category"),
      _sort:searchParams.get("order") && "price",
      _order:searchParams.get("order")
    },
  };
  // console.log(obj.params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(obj));
  }, [location.search]);
  //   console.log(store);
  return (
    <div>
      {isLoading && <h1>Loading.....</h1>}
      {isError && <h1>Error</h1>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "20px",
          // width:"1000px",
          // textAlign: "center",
        }}
      >
        {product?.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
