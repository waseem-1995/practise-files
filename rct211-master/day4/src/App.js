import { useState } from "react";
import "./App.css";
import PinTab from "./Components/PinTab";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <h1>Generic Component</h1>
      <PinTab length={6} maxChar={1} setOtp={setOtp} />
      <h1>Otp : {otp}</h1>
    </div>
  );
}

export default App;
