

//actions

const incrementCounter=(payload)=>{
    return {
        type:"Increment_counter",
        payload,
    };
};

const decrementCounter=(payload)=>{
    return {
        type:"Decrement_counter",
        payload,
    };
};




//reducers

const reducer=(state,action)=>{
    
    const {type,payload}=action;
    switch(type){
        case "Increment_counter":
            return {...state, counter:state.counter+payload};
        case "Decrement_counter":
            return {...state, counter:state.counter-payload};
        default:
            return state;
    }
}





//store
//store the state of the Application
// access the data present in the store
// modify the data  --> dispatch(action)

const createStore =(reducer ,initialState) =>{

    const store={};

    store.state=initialState;

    store.getState =()=> store.state;

    store.dispatch=(action)=>{
        store.state = reducer(store.state,action)
    }

    return store;
}

const store= createStore(reducer,{counter :0})  ;

console.log(store.getState());
store.dispatch(incrementCounter(10))
console.log(store.getState())
store.dispatch(decrementCounter(4))
console.log(store.getState())