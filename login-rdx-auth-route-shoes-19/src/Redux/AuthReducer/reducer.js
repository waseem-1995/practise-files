import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const initialState = {
	isAuth: false,
	token: "",
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case LOGIN_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case LOGIN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				isError: false,
				isAuth: true,
				token: payload,
			};
		}

		case LOGIN_FAILURE: {
			return {
				...state,
				isLoading: false,
				isError: true,
				isAuth: false,
				token: "",
			};
		}
		default: {
			return state;
		}
	}
	return state;
};
