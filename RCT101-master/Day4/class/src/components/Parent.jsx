import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    const [value, setValue] = useState('')
    const handleinput = (e) => {
        setValue(e.target.value)
    }
  return (
    <div>
        {/* <input type="text" onChange={handleinput} /> */}
        <br />
        Parent:{value}
        <Child1 value={value} setValue={setValue}/>
        <Child2 value={value} setValue={setValue}/>
    </div>
  )
}

export default Parent