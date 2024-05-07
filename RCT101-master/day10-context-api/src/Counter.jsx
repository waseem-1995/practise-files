import React , {useReducer}from 'react'

const reducer = (counter, action) => {
    switch (action.type){
      case 'plus':{
        return counter + 1
      }
      case 'minus':{
        if(counter > 0) return counter - 1
      }
      default:{
        console.log('Type Incorrect', action.type)
        return counter
      }
    }
  }

const Counter = () => {
    const [counter , setCounter] = useReducer(reducer , 0)
    return (
        <div className="App">
          <h1>Counter : {counter}</h1>
          <button onClick={() => setCounter({type : 'plus'})}> + </button>
          <button onClick={() => setCounter({type : 'minus'})}> - </button>
        </div>
      );
}

export default Counter