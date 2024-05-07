import React, { useEffect, useReducer, useState} from 'react'

const reducer = (state,{type,payload}) => {
// console.log(type,payload)
  switch(type){
      case "ADD_TODO":{
          return {
              ...state,
              todo:[...state.todo,payload]
          }
      }
      case "DELETE":{
          return {
              ...state,
              todo:[...state.todo].filter((e,i) => i !== payload)
          }
      }
      default:{
          return state
      }
  }

}

const Addtodo = ({settodomain,itodelete,fun}) => {
    const [addtodo,setaddtodo] = useReducer(reducer,{todo:[{todo:"Learn React",status:false}]})
    settodomain(addtodo.todo)
    const todelete= () => {
        setaddtodo({type:"DELETE",payload:itodelete})
    }
    useEffect(() => {
       fun(todelete) 
    },[itodelete])
    
    // console.log(itodelete)
    const [todo,settodo] = useState("");
  return (
    <div>
       <input type="text" onChange={(e) => settodo(e.target.value)} />
      <button onClick={() => setaddtodo({type:"ADD_TODO",payload:{todo,status:false}})}>Add todo</button>
    </div>
  )
}

export default Addtodo
