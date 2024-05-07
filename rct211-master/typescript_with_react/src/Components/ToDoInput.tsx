import React, { useState } from "react";
import { getData, postData } from "../Pages/api";
import { todo } from "../Pages/todoTypes";
interface proptype {
  onAdd: (a:todo)=> void
}
export default function ToDoInput({ onAdd }:proptype) {
  const [newState, setState] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      title: newState,
      status: true,
    };
    postData(newTodo).then((res) =>onAdd(res));
    setState("");
  };
  return (
    <div>
      <h1>ToDoInput</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newState}
          onChange={(e) => setState(e.target.value)}
        />
        <button>AddToDo</button>
      </form>
    </div>
  );
}
