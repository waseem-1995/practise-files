// Note: Do not update/change the initial state
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  RESET_AUTH
} from "./auth.types";

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        token: payload,
        isAuthenticated:true
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    case AUTH_SIGN_OUT: {
      return {
        ...state,
        
      };
    }
    case RESET_AUTH:{
      return {
        ...authInitalState
      }
    }
    default: {
      return state;
    }
  }
};
