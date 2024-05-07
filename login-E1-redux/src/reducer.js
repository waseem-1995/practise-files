//import the action types here from the actionTypes.js to be used in the reducer function
import * as types from "./actionTypes" ;
//Complete the reducer function here
const reducer = (state, action) => {
 const {type, payload}= action;

 switch (type) {
    case types.LOGIN_REQUEST: 
    return {
        ...state, isloading: true,
    } 
    case types.LOGIN_SUCCESS:
        return{
            ...state, token:payload , isAuth:true
        }
    case types.LOGIN_FAILURE:
        return {
        ...state, isError: true,
    }
    case types.EMAIL:
        return {
            ...state, email: payload
        }
    case types.PASSWORD:
        return {
            ...state, password: payload
        }
    default: return state; 
 }

};

export { reducer };
