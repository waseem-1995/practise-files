import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todos, settodos] = useState([]);
  const [newTodo, setnewTodo] = useState("");
  const url = "http://localhost:8080/todos";

  //saving todo
  const saveTodo = () => {
    //call api to save the information in backend
    fetch(url, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        value: newTodo,
        isCompleted: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        settodos([...todos, data]);
        setnewTodo("");
      });
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settodos(data);
      });

    // return () => {};
  }, []);


  //removing todo
  const removeTodo = () => {
    fetch(`http://localhost:8080/todos`, {
      method: "DELETE",
      headers : {"content-type" : "application/json"},
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <h1>Todo App with Json Server</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={({ target }) => setnewTodo(target.value)}
          style={{ outline: "none", border: "1px solid black" }}
        />
        <button onClick={saveTodo}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div style={{display:"flex" , justifyContent:"center", marginTop:"10px"}}>
            <li key={todo.id}>{todo.value}</li>
            <button onClick={removeTodo}>Done</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
