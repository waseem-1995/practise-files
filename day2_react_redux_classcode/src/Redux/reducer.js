import * as types from "./actionTypes"

const initialState={
    
    todo:[],
    isLoading:false,
    isError:false
    
}

const reducer=(state=initialState,action)=>{
const {type,payload}=action

switch(type){
    case types.GET_TODO_REQUEST:
    return {...state,  isLoading:true}

    case types.GET_TODO_SUCCESS:
    return {...state,todo:payload,isLoading:false}
    case types.GET_TODO_FAILURE:
    return {...state , isLoading:false,isError:payload}

    case types.ADD_TODO_REQUEST:
        return {...state,  isLoading:true}
    
        case types.ADD_TODO_SUCCESS:
        return {...state,todo:[...state.todo,payload],isLoading:false}
        case types.ADD_TODO_FAILURE:
        return {...state , isLoading:false,isError:payload}
    default:
    return state
}



}

export default reducer