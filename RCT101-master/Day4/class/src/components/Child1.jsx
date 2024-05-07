import React from 'react'

const Child1 = (props) => {

    const handleChange = (e) => {
        let x = e.target.value;
        props.setValue(x)
    }
  return (
    <div>Child1 : {props.value}
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Child1