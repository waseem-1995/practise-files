//import the action types here from the actionTypes.js to be used in the reducer function

import {
	EMAIL,
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	PASSWORD,
} from "./actionTypes";

//Complete the reducer function here
const reducer = (reducerState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST: {
			return { ...reducerState, isLoading: true };
		}
		case LOGIN_FAILURE: {
			return { ...reducerState, isLoading: false, isError: true };
		}
		case LOGIN_SUCCESS: {
			return {
				...reducerState,
				isAuth: true,
				token: action.payload,
				isLoading: false,
				isError: false,
			};
		}
		case EMAIL: {
			return { ...reducerState, email: action.payload };
		}
		case PASSWORD: {
			return { ...reducerState, password: action.payload };
		}
		default: {
			return reducerState;
		}
	}
};

export { reducer };
