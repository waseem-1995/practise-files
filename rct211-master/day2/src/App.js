
import "./App.css";
import React from "react";

import SimpleState from "./Components/SimpleState";
import Button from "./Components/Button";

function App() {
  const [state, setState] = React.useState(false);
  return (
    <div className="App">
      {/* <Counter direction={state} /> */}
      {
        state &&  <SimpleState />
      }
     
      <Button name={state ? "HIDE" : "SHOW"} func={()=> setState((prev) => !prev)} />
      {/* <button onClick={() =>}></button> */}
    </div>
  );
}
//The button component gonna be intresting,follow the code an u will get it
export default App;
