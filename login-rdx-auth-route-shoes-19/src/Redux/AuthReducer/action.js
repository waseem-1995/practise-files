//Create ActionCreator functions here
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

export const loginRequest = () => {
	return {
		type: LOGIN_REQUEST,
	};
};

export const loginSuccess = (payload) => {
	return {
		type: LOGIN_SUCCESS,
		payload,
	};
};

export const loginFailure = () => {
	return {
		type: LOGIN_FAILURE,
	};
};
