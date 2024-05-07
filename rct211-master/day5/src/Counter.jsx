import React, { useState } from "react";
import { addAction, reduceAction } from "./Redux/action";
import { store } from "./Redux/store";

export default function Counter() {
    const [state, setstate] = useState(1);
  const { getState, dispatch,subscribe } = store;
console.log(getState())
subscribe(()=>{
    setstate((prev)=>prev+1)
})
const handleAdd = ()=>{
    console.log(getState())
    dispatch(addAction(1))
}
const reduce = ()=>{
    console.log(getState())
    dispatch(reduceAction(1))
}
  return (
    <div>
      <h1>Counter: {getState().counter}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={reduce}>REDUCE</button>
    </div>
  );
}
