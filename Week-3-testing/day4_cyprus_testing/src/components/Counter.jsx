import React,{useState} from 'react'

const Counter = () => {

    const [counter,setCounter]=useState(0)
  return (
    <div>
        <h3>Count is: {counter}</h3>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>increment</button>
        <button  onClick={()=>{
            setCounter(counter-1)
        }}>decrement</button>
    </div>
  )
}

export default Counter