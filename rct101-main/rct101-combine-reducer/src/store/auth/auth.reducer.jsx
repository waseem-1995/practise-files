import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, LOGOUT } from "./auth.types"

const initauth = {
    loading:false,
    isauth:false,
    error:false,
    token:""
}
// eve.holt@reqres.in
export const authreducer = (state = initauth,{type,payload}) => {
    // console.log(payload.token)
    switch(type){
        case AUTH_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case AUTH_SUCCESS:{
            return {
                ...state,
                isauth:true,
                loading:false,
                error:false,
                token:payload.token
            }
        }
        case AUTH_ERROR:{
            return {
                ...state,
                error:true
            }
        }
        case LOGOUT:{
            return {
                ...state,
                isauth:false,
                token:""
            }
        }
        default:{
            return state
        }
    }
} 