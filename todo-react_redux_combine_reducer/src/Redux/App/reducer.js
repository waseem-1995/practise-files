import * as types from "./actionTypes";
import { loadData,saveData } from "../../utitls/localStorage";

const initialState={
    Counter:loadData("Counter")|| 0,
    todos:{id:1,task:"buy Milk",status:false}
}

const reducer=(state=initialState,action)=>{
    const {type,payload}=action;

    switch(type){

        case types.INCREMENT_COUNTER:

        let newCount=state.Counter+payload;
        saveData("Counter",newCount);
            return {
                ...state,
                Counter:newCount,
                todos:{...state.todos}
                
            }

        case types.DECREMENT_COUNTER:
        return {
                ...state,
                Counter:state.Counter-payload,
                
            }
        default:
            return state
    }
}

export default reducer;