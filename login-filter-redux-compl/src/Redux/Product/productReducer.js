import {
  GET_PRODUCT_SUCCESS,
  POST_REQUEST_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionType";

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }
    case PRODUCT_REQUEST: {
      return { ...state, isError: false, isLoading: true };
    }
    case GET_PRODUCT_SUCCESS: {
      return { ...state, isError: false, isLoading: false, product: payload };
    }
    case POST_REQUEST_SUCCESS: {
      return { ...state, isError: false, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
