import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import {
      getShoesFailure,
      getShoesRequest,
      getShoesSuccess,
} from "../../Redux/action";
// import {
//       get_data,
//       get_data_fail,
//       get_data_request,
// } from "../../Redux/actionTypes";
import ShoeCard from "./ShoeCard/ShoeCard";

const Shoes = () => {
      const dispatch = useDispatch();
      const shoes = useSelector((store) => store.shoes);
      const getdata = () => {
            axios.get("http://localhost:8080/shoes")
                  .then((res) => {
                        dispatch(getShoesRequest());

                        return res;
                  })
                  .then((res) => dispatch(getShoesSuccess(res.data)))
                  .catch((error) => dispatch(getShoesFailure(error)));
      };
      useEffect(() => {
        getdata();
      }, []);

      return (
            <div className="main-shoes-div">
                  {shoes.map((item, index) => {
                        return <ShoeCard item={item} key={index} getdata={getdata}/>;
                  })}
            </div>
      );
};

export default Shoes;
