import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Pin from "./components/Pin"

function App() {
  const [otp, setOtp] = useState("")

  return (
    <div className="App">
      <Pin length={4} onChange={(value)}/>
     <h3> OTP value is {otp}</h3>
    
    </div>
  )
}

export default App
