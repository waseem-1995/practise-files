import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, reduceAction } from "../redux/action";

export default function Counter() {
  const data = useSelector((store) => store.counter);
  console.log(data);
  const dispatcher = useDispatch();
  const handleADD = () => {
    dispatcher(addAction(1));
  };
  const handleADD2 = () => {
    dispatcher(addAction(2));
  };
  const handleSubstract = () => {
    dispatcher(reduceAction(1));
  };
  return (
    <div>
      <h1>Counter : {data}</h1>
  
      <button onClick={handleADD}>ADD</button>
      <button onClick={handleADD2}>ADD 2</button>
      <button onClick={handleSubstract}>REDUCE</button>
    </div>
  );
}
