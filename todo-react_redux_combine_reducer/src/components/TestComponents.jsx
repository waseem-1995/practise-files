import React from 'react'
import {shallowEqual,useSelector} from "react-redux"

const TestComponents = () => {

    const todos=useSelector((store)=>store.todos,shallowEqual) // shallow equal checks whether data changes inside or not then component won't rendered.
    console.log("TestComponents rendering",todos)
  return (
    <div>TestComponents {todos?.length ? "true" :"false"}</div>
  )
}

export default TestComponents