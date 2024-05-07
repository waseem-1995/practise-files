import { counter_decrement, counter_increment, counter_addValue, counter_subValue, counter_multiplyValue, counter_divide} from "./action.types";

export const reducer  = (state , action) => {
    let value = +action.payload;
    console.log(value)

    switch(action.type){
        case counter_increment:{
            {state.count++}
            return {...state}
        }
        case counter_decrement:{
            state.count--;
            return {...state}
        }
        case counter_addValue:{
            state.count = state.count + value;
            return {...state}
        }
        case counter_subValue:{
            state.count = state.count - value;
            return {...state}
        }
        case counter_multiplyValue:{
            state.count = state.count * value;
            return {...state}
        }
        case counter_divide:{
            state.count = (state.count/value).toFixed(2)
            return {...state}
        }
        default:{
            return {...state}
        }
    }
}