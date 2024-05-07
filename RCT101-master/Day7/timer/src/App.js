import React, { useState } from "react";
import Stopwatch from "./Components/Stopwatch";
import Timer from "./Components/Timer";

const App = () => {
  const [display, setDisplay] = useState(undefined);

  return (
    <div style={{border:"0px solid black", width:"max-content", margin:"auto", textAlign:"center"}}>
      <div style={{display:"flex", border:"1px solid black", width:"500px", justifyContent:"space-evenly"}}>
        <h1 onClick={() => setDisplay(0)}>Stopwatch</h1>
        <h1 onClick={() => setDisplay(1)}>Timer</h1>
      </div>

      <div>
        {display == 0 ? <Stopwatch/> : <Timer/>}
      </div>
    </div>
  );
};

export default App;
