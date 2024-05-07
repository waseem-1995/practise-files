import React, { useEffect } from 'react'
import { getTodoFailure, getTodoRequest, getTodoSuccess ,addTodoRequest,addTodoSuccess,addTodoFailure} from '../Redux/action'
import { useDispatch } from 'react-redux'
import TodoInput from './TodoInput'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {store} from "../Redux/store"

const Todo = () => {
    const { todo,isLoading,isError}=useSelector((store)=>store)
   
 const dispatch=useDispatch();


 const addTodos=(payload)=>{
  const requestaction=addTodoRequest()
  dispatch(requestaction)
  return axios.post("http://localhost:8080/Todos",payload)
  .then((res)=>{
      const successAction=addTodoSuccess(res.data)
      console.log(successAction)
      dispatch(successAction)
  })
  .catch((err)=>{
      const errorAction=addTodoFailure(err)
      dispatch(errorAction)
  })
 }
 const handleAdd=(payload)=>{
  addTodos(payload)
  .then(()=>getTodos())
  .catch((error)=>console.log(error));
 }
  const getTodos=()=>{
    const requestaction=getTodoRequest()
    dispatch(requestaction)
    return axios.get("http://localhost:8080/Todos")
    .then((res)=>{
        const successAction=getTodoSuccess(res.data)
        console.log(successAction)
        dispatch(successAction)
    })
    .catch((err)=>{
        const errorAction=getTodoFailure(err)
        dispatch(errorAction)
    })
  }
  
    useEffect(()=>{
     getTodos()
    },[])
    console.log(todo)
  return (
    <div>
      
        <h1>Todos</h1>
        <TodoInput onClick={handleAdd}/>
        {todo.length&& todo.map((e)=>(
          <div key={e.id}>{e.title}</div>
        ))}
    </div>
  )
}

export default Todo