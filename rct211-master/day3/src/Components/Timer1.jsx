import React, { useState } from "react";
import useTimer from "../CustomHooks/useTimer";

export default function Timer1() {
//   const [state, setState] = useState(false);
  const state = useTimer(2000)
  return <div>{state && <h1>Timer1</h1>}</div>;
}
