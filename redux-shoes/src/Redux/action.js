import { GET_SHOES_FAILURE, GET_SHOES_REQUEST, GET_SHOES_SUCCESS } from "./actionTypes";

//Create ActionCreator functions here
export const getShoesRequest = ()=>{
    return {
        type : GET_SHOES_REQUEST,
        payload : true
    }
};

export const getShoesSuccess = (data)=>{
    return {
        type : GET_SHOES_SUCCESS,
        payload : data
    }
};

export const getShoesFailure = ()=>{
    return {
        type : GET_SHOES_FAILURE,
        payload : true
    }
};