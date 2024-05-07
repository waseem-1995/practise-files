import React, { useCallback, useState } from "react";
import { ToDo } from "./ToDo";
const initialState = [
  { id: 1, status: true, title: "task-1" },
  { id: 2, status: true, title: "task-2" },
  { id: 3, status: true, title: `task-3` },
];
export default function ToDoInput() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState(initialState);
  const handleClick = () => {
    const newTodo = {
      title,
      id: Date.now(),
      status: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  const handleDelete = useCallback((id) => {
    setTodos((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  }, []);
  const handleToggle = useCallback((id) => {
    setTodos((prev) => {
      return prev.map((el) =>
        el.id === id ? { ...el, status: !el.status } : el
      );
    });
  }, []);
  console.log(todos);
  return (
    <div>
      ToDoInput
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add ToDo"
      />
      <button onClick={handleClick}>ADD TO DO</button>
      {todos.map((el) => (
        <ToDo
          key={el.id}
          {...el}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}
