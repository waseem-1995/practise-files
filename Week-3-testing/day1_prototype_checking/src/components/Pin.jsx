import React, { useState } from 'react'
import PropTypes from "prop-types"

const Pin = ({length,onChange}) => {
    inputRef=useRef
    const [InputBoxLen]=useState(new Array(length).fill(1))
  return (
    <div>
        {InputBoxLen.map((item,index)=>{
            return <input key={index} maxLength={1}/>
        })}
    </div>
  )
}
Pin.propTypes={
    length:PropTypes.number,
    onChange:PropTypes.func,
}

export default Pin