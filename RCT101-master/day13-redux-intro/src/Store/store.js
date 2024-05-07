import { legacy_createStore } from "redux";

import { reducer } from "./reducer"

let initialState = {
    count : 0
}

const store = legacy_createStore(reducer, initialState);

export default store;
