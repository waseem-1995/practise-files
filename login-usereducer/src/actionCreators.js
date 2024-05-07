//create action creator functions here, using the action types from actionTypes.js;
import {
	LOGIN_SUCCESS,
	LOGIN_REQUEST,
	LOGIN_FAILURE,
	EMAIL,
	PASSWORD,
} from "./actionTypes";

export const handleLoginSuccess = (payload) => {
	return {
		type: LOGIN_SUCCESS,
		payload,
	};
};

export const handleLoginRequest = (payload) => {
	return {
		type: LOGIN_REQUEST,
		payload,
	};
};

export const handleLoginFailure = (payload) => {
	return {
		type: LOGIN_FAILURE,
		payload,
	};
};

export const handleEmail = (payload) => {
	return {
		type: EMAIL,
		payload,
	};
};

export const handlePassword = (payload) => {
	return {
		type: PASSWORD,
		payload,
	};
};
