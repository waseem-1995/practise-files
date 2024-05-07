import {legacy_createStore as createStore, combineReducers,applyMiddleware,compose} from "redux";

import reducer from "./App/reducer";
import {reducer as Authreducer} from "./Auth/reducer"



const rootReducer=combineReducers({reducer,Authreducer})

const logger1=(store)=>(next)=>(action)=>{
console.log("Dispatching action 1-a",action);
const value=next(action);
console.log("After return 1-b" ,value)
return value;
}

const logger2=(store)=>(next)=>(action)=>{
    console.log("dispatching action 2-c",action)
    const value=next(action);
    console.log("after return 2-d",value)
    return value;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//compose is used to bring to enhabcer together.

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(logger1,logger2)));

//console.log(store.getState());

export {store}