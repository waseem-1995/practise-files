import React, { useEffect, useState } from "react";
import { getData } from "../Pages/api";
import { todo } from "../Pages/todoTypes";
import ToDoApp from "./ToDoApp";
import ToDoInput from "./ToDoInput";

export default function ToDo() {
  const [todo, setTodo] = useState<todo[]>([]);
  const [changeDelete, setDelete] = useState<boolean>(true);
  useEffect(() => {
    getData().then((res) => setTodo(res.data));
  }, [changeDelete]);
  const handleToggle = () => {};
  const onDelete = () => {
    setDelete((prev) => !prev);
  };
  const onAdd = (newTodo: todo) => {
    setTodo([...todo, newTodo]);
    console.log(todo);
  };
  return (
    <div>
      <ToDoInput onAdd={onAdd} />
      {/* <ToDoInput onAdd = {onaddd}/> */}
      <h1>ToDo Items</h1>
      {todo?.map((el) => (
        <ToDoApp key={el.id} {...el} onDelete={onDelete} setTodo={setTodo}/>
      ))}
    </div>
  );
}
