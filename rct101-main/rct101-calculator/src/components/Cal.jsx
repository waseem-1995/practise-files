import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incredecre, add, mul, sub, divide } from '../refactor/action';
import "./cal.css"
const Cal = () => {
    const [input,setinput] = useState("");
    const count = useSelector((store) => store.count)
    const dispatch = useDispatch();
    const handleinput = (e) => {

      setinput(e.target.value);

    };

  return (
    <div>
      <h1>{count}</h1>
      <input onChange={handleinput} type="number" placeholder=""/>
      <div className='box'>
      <button onClick={() => dispatch(incredecre(1))}>increment</button>
      <button onClick={() => dispatch(add(Number(input)))}>add</button>
      <button onClick={() => dispatch(mul(Number(input)))}>multiply</button>
      <button onClick={() => dispatch(incredecre(-1))}>decrement</button>
      <button onClick={() => dispatch(sub(Number(input)))}>subtract</button>
      <button onClick={() => dispatch(divide(Number(input)))}>divide</button>
      </div>
    </div>
  )
}

export default Cal
