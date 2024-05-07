import { legacy_createStore } from "redux"
import { reducer } from "./reducer"

const initialState = {
    counter:10,
}
export const store = legacy_createStore(reducer,initialState)
//params
// 1 -> reducer function
//2 ->initialState