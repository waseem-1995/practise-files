import React, { useState } from "react";

const TodoInput = ({ addToDo }) => {
  const [text, setText] = useState("");
  const handleClick = () => {
    addToDo(text);
    setText("");
  };
  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="ADD TODO HERE"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default TodoInput;
