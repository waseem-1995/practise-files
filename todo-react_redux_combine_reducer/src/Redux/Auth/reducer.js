import *as types from "./actionTypes"

const initialState={
    isAuth:false,
    token:""
}
  
const reducer=(state=initialState,action)=>{
    const {type,payload}=action

    switch(type){

        case types.LOGIN_SUCCESS:
            return {
                isAuth:true,
                token:payload
            }

        case types.LOGOUT_FAILURE:
            return {
                    isAuth:false,
                    token:""
                }
        default:
            return state
    }
}

export  {reducer}