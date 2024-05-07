import React from 'react'

const Child2 = ({value, setValue}) => {
    const handleChange = (e) => {
        let newValue = e.target.value
        setValue(newValue)
    }
  return (
    <div> Child2 : {value}
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Child2