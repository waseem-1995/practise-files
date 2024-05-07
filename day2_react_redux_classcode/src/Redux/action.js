import * as types from "./actionTypes"

const getTodoRequest=()=>{
    return {type:types.GET_TODO_REQUEST};
}

const getTodoSuccess=(payload)=>{
    return {type:types.GET_TODO_SUCCESS,payload};
}

const getTodoFailure=(error)=>{
    return {type:types.GET_TODO_FAILURE,payload:error};
}

const addTodoRequest=()=>{
    return {type:types.ADD_TODO_REQUEST};
}

const addTodoSuccess=(payload)=>{
    return {type:types.ADD_TODO_SUCCESS,payload};
}

const addTodoFailure=(error)=>{
    return {type:types.ADD_TODO_FAILURE,payload:error};
}

export{getTodoRequest,getTodoSuccess,getTodoFailure,addTodoRequest,addTodoSuccess,addTodoFailure}