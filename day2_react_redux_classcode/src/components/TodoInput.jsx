import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

const TodoInput = ({onClick}) => {
    const [text,setText]=useState("")

    const handleAdd=()=>{
        const payload={id:uuid(),title:text,status:false};
        onClick(payload);
        setText("")
    }
  return (
    <div>
        <input type="text"  placeholder='Enter Some Task' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>Add To do</button>
    </div>
  )
}

export default TodoInput