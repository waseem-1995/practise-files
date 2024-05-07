import React from "react";
import { deleteTodo, getData, toggleTodo } from "../Pages/api";
import { todo } from "../Pages/todoTypes";

interface props_func extends todo{
onDelete : ()=>void
}
interface props_func{
  setTodo:any
}
export default function ToDoApp({ id, status, title,onDelete,setTodo }: props_func) {
  const handleDelete = () => {
    deleteTodo(id).then((res) => onDelete());
  };
  const handleToggle = ()=>{
    toggleTodo(id).then(()=>getData()).then((res)=>setTodo(res.data))
  }
  return (
    <div>
      <h1>
        {id} - {title} -- {status ? "Completed" : "Not-Completed"}
      </h1>{" "}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle ToDo</button>
    </div>
  );
}
