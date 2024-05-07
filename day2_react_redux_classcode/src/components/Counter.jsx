import React, { useState } from 'react'

const Counter = () => {
    const[counter,setCounter]=useState(1);
  return (
    <div>Counter
        <h3>Counter:{counter}</h3>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>Incre</button>
    </div>
  )
}

export default Counter