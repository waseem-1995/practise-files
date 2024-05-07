import React from "react";
import Button from "./Button";
const server = {
  value: 1,
};
export default function SimpleState() {
  const [Count, setCount] = React.useState(server || { value: 1 });
  const ADD = () => {
    console.log(Count.value);
    setCount((prev) => {
    //   return { value: prev.value + 1 };
      return { ...prev,value: prev.value + 1 };
    });
    // setCount({...Count,value:Count.value+1})

    // These are 3 ways to update stae but prefer the 1st one
    // Reason for the 1st one is that i returnd object since it was an object earlier i used "value" keyword there since that was fix as i have used only value keyword
  };
  const REDUCE = () => {
    setCount((prev) => {
      return { value: prev.value - 1 };
    });
  };
  return (
    <div>
      <h1>Count: {Count.value}</h1>
      <Button name={"Add"} func={ADD} />
      <Button name={"REDUCE"} func={REDUCE} />
    </div>
  );
}
