import { GET_SHOES_FAILURE, GET_SHOES_REQUEST, GET_SHOES_SUCCESS, UPDATE_SHOE_COUNT_FAILURE, UPDATE_SHOE_COUNT_REQUEST, UPDATE_SHOE_COUNT_SUCCESS } from "./actionTypes";

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, {type ,payload}) => {
  switch (type) {
    case GET_SHOES_REQUEST:
      return {...state,isLoading : payload};
    case GET_SHOES_SUCCESS : 
      return {...state,shoes : payload};
    case GET_SHOES_FAILURE:
      return {...state ,isError : payload};
    case UPDATE_SHOE_COUNT_REQUEST : 
      return {...state,isLoading : payload};
    case UPDATE_SHOE_COUNT_SUCCESS : 
      return state;
    case UPDATE_SHOE_COUNT_FAILURE : 
      return {...state ,isError : payload};
    default:
      return state;
  }
};
