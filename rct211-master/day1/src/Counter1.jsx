import React from 'react'


 const initState = ()=>{
    if(direction=="forward"){
        return {value:0}
    }
    else if(direction=="backward"){
        return {value:60}
    }
 }
 const handleClick = ()=>{
    setState((prev)=>{
        return {...prev,value:prev}
    })
 }
export default function Counter1() {
    const [state,setState] = React.useState(initState)
  return (
    <div>

        <button onClick={handleClick}>Start</button>
    </div>
  )
}
