import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";
import "./Todo.css"

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    todos.push(input);
    setTodos([...todos]);
    console.log(todos);
  };

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo !== value))
  }

  return (
    <div id="mainBox">
      <h1 className="heading">To Do List</h1>
      <div>
        {/* Todo input is coming from the todoinput file  */}
        <TodoInput addTodo={addTodo} />
        <TodoList>
          {todos.map((todo) => (
             <TodoItem key={todo.id} value={todo} deleteTodo={deleteTodo}/>
          ))}
        </TodoList>
      </div>
    </div>
  );
};

export default Todo;
