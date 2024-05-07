import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../actionType";

export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const loginRequest = () => {
  return { type: LOGIN_SUCCESS };
};
export const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};
export const authenticationSuccess = (payload) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post(`https://reqres.in/api/login`,payload)
    .then((res)=>dispatch(loginSuccess(res.data)))
    .catch(() => dispatch(loginFailure()));
};
