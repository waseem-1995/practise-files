import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, LOGOUT } from "./auth.types";

export const authapi = (creds) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  axios
    .post("https://reqres.in/api/login", creds)
    .then((r) => dispatch({ type: AUTH_SUCCESS, payload: r.data }))
    .catch((e) => {
      dispatch({ type: AUTH_ERROR });
    });
};

export const logoutapi = () => ({ type: LOGOUT });
