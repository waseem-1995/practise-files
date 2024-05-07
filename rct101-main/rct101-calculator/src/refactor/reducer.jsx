import {INCRE_DECRE,ADD,MUL,SUB,DIV} from "./actiontype"

const init = {
    count:0
}

export const reducer = (state = init, {type,payload}) => {
    switch(type){
        case INCRE_DECRE:
            return {
                ...state,
                count:state.count+payload
            };
        case ADD:
            return {
            ...state,
            count:state.count+payload  
            };  
        case MUL:
            return {
                ...state,
            count:state.count*payload
            }    
        case SUB: 
            return {
                ...state,
                count:state.count-payload
            }    
        case DIV:
            return {
                ...state,
                count:state.count/payload
            }   
        default:
            return state;
    }
}


