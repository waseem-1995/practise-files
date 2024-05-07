import * as types from "./actionTypes"


const loginSuccess=(payload)=>{
    return {
        type:types.LOGIN_SUCCESS,
        payload
    }
}

const loginFailure=()=>{
    return {
        type:types.LOGOUT_FAILURE,
        
    }
}

export {loginSuccess,loginFailure}