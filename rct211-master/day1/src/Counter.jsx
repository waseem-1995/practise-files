import React, { useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  useEffect(() => {
    console.log("1")
//    const id = setTimeout(()=>{
//         console.log("abcd")
//     },2000)
    return () => {
        // clearInterval(id)
        console.log("2")
    }
  }, [counter]);
  console.log("3")
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={()=>setCounter(prev =>prev+1)}>Increase</button>
    </div>
  );
}
