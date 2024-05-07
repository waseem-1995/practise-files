import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authreducer } from "./auth/auth.reducer";

const rootreducer = combineReducers({
    auth:authreducer
})

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))