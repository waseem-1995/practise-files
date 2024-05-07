import {
	GET_SHOES_DATA_REQUEST,
	GET_SHOES_DATA_SUCCESS,
	GET_SHOES_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
	shoes: [],
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_SHOES_DATA_REQUEST: {
			return {
				...state,
				isLoading: true,
			};
		}

		case GET_SHOES_DATA_SUCCESS: {
			return {
				...state,
				isLoading: false,
				isError: false,
				shoes: payload,
			};
		}

		case GET_SHOES_DATA_FAILURE: {
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		}

		default: {
			return state;
		}
	}
};
