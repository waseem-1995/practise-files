import {
  ADD,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  REDUCE,
} from "./actionTypes";

export const addAction = (payload) => {
  return { type: ADD, payload };
};
export const reduceAction = (payload) => {
  return { type: REDUCE, payload };
};

//TODO
export const todoRequest = () => {
  return { type: GET_DATA_REQUEST };
};
export const todoSuccess = (payload) => {
  return { type: GET_DATA_SUCCESS, payload };
};
export const todoFailure = () => {
  return { type: GET_DATA_FAILURE };
};
//===>
export const postRequest = () => {
  return { type: POST_DATA_REQUEST };
};
export const postSuccess = (payload) => {
  return { type: POST_DATA_SUCCESS, payload };
};
export const postFailure = () => {
  return { type: POST_DATA_FAILURE };
};
