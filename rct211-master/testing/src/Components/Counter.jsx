import React, { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  const handleReduce = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div >
      <h1 data-testid="counter">Counter: {count}</h1>
      <Button handleClick={handleClick} handleReduce={handleReduce}/>
      {/* <Button /> */}
    </div>
  );
}
