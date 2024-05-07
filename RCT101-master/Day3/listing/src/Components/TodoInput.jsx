import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    let x = e.target.value;
    setValue(x);
  };
  return (
    <div className="todoinput">
      <button
        disabled={!value}
        onClick={() => {
          console.log(value);
          addTodo(value);
          setValue("");
        }}
      >
        +
      </button>
      <input value={value} type="text" placeholder="Write Something..." onChange={handleInput} />
    </div>
  );
};

export default TodoInput;
