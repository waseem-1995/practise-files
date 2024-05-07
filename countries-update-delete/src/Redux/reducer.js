import { DELETE_COUNTRY_FAILURE, DELETE_COUNTRY_REQUEST, DELETE_COUNTRY_SUCCESS, GET_COUNTRIES_FAILURE, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, UPDATE_COUNTRY_FAILURE, UPDATE_COUNTRY_REQUEST, UPDATE_COUNTRY_SUCCESS } from "./actionTypes";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case GET_COUNTRIES_REQUEST:
      return {...state , isLoading : true};
      
    case GET_COUNTRIES_SUCCESS:
      return {...state, countries : payload};

    case GET_COUNTRIES_FAILURE :
      return {...state, isError : true};

    case UPDATE_COUNTRY_REQUEST:
      return {...state , isLoading : true};
      
    case UPDATE_COUNTRY_SUCCESS:
      return {...state, countries : payload};

    case UPDATE_COUNTRY_FAILURE :
      return {...state, isError : true};

    case DELETE_COUNTRY_REQUEST:
      return {...state , isLoading : true};
      
    case DELETE_COUNTRY_SUCCESS:
      return {...state, countries : payload};

    case DELETE_COUNTRY_FAILURE :
      return {...state, isError : true};
    default:
      return state;
  }
};
