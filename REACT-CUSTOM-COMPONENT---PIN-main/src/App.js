import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';

function App() {
  const [Otp,setOtp]=useState("")
  return (
    <div className="App">
      <Pin length={4} OtpHandelar={(value)=>{setOtp(value)}}/>
      <h4>OTP value of is {Otp}</h4>
    </div>
  );
}

export default App;
