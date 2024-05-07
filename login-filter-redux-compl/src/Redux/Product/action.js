import axios from "axios";
import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionType";

export const productRequest = () => {
  return { type: PRODUCT_REQUEST };
};
export const productFailure = () => {
  return { type: PRODUCT_FAILURE };
};
export const getProductSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};
export const postProductSuccess = () => {
  return { type: GET_PRODUCT_SUCCESS };
};

export const addProduct = (payload) => (dispatch) => {
  dispatch(productRequest());
  axios
    .post(`http://localhost:3004/products`, payload)
    .then(() => dispatch(postProductSuccess()))
    .catch(() => dispatch(productFailure()));
};
export const getProduct = (params)=> (dispatch) => {
  // console.log("checked")
  dispatch(productRequest());
  axios
    .get(`http://localhost:3004/products`,params)
    .then((res) => dispatch(getProductSuccess(res.data)))
    .catch(() => dispatch(productFailure()));
};
