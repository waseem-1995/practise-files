//create action creator functions here, using the action types from actionTypes.js;

import * as types from "./actionTypes"

function login_request (){
    return {
        type: types.LOGIN_REQUEST
    }
}

function login_success( payload){
    return {
        type : types.LOGIN_SUCCESS, 
        payload: payload
    }
}

function login_failure( ){
    return {
        type : types.LOGIN_FAILURE
    }
}

function set_email(payload) {
    return {
        type: types.EMAIL,
        payload:payload
    }
}

function set_password(payload) {
    return {
        type: types.PASSWORD,
        payload: payload
    }
}

export {login_failure, login_success, login_request, set_password, set_email}