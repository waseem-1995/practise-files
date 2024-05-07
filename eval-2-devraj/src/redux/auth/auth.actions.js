// Auth Actions here
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  RESET_AUTH
} from "./auth.types";

export const authLoading = (payload) => ({
  type: AUTH_SIGN_IN_LOADING,
  payload
});

export const authSuccess = (payload) => ({
  type: AUTH_SIGN_IN_SUCCESS,
  payload
});

export const authError = (payload) => ({
  type: AUTH_SIGN_IN_ERROR,
  payload
});

export const authSignOut = () => ({
  type: AUTH_SIGN_OUT,
});

export const resetAuth=()=>({
  type:RESET_AUTH,

})
