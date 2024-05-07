import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Product/productReducer";
import { authReducer } from "./Authentication/authReducer";
const rootReducer = combineReducers({
  productReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
