//Create ActionCreator functions here
import {
	GET_SHOES_DATA_REQUEST,
	GET_SHOES_DATA_SUCCESS,
	GET_SHOES_DATA_FAILURE,
} from "./actionTypes";

const getShoesRequest = () => {
	return {
		type: GET_SHOES_DATA_REQUEST,
	};
};
const getShoesSuccess = (payload) => {
	return {
		type: GET_SHOES_DATA_SUCCESS,
		payload,
	};
};

const getShoesFailure = () => {
	return {
		type: GET_SHOES_DATA_FAILURE,
	};
};

export { getShoesRequest, getShoesSuccess, getShoesFailure };
