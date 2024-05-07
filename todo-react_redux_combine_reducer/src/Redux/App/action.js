import * as types from "./actionTypes"

const incrementCounter=(payload)=>{
    return {
        type:types.INCREMENT_COUNTER,
        payload
    }
}

const decrementCounter=(payload)=>{
    return {
        type:types.DECREMENT_COUNTER,
        payload
    }
}

export { incrementCounter, decrementCounter}