import React, { useState } from "react";

const Todoinput = ({ i, todomap, setdelete, fun }) => {
  const {status,todo} = todomap;
  const [statu,setstatus] = useState(false)

  return (
    <div>
      <div><button onClick={() => {setstatus(!statu)}}>{statu === false ? "Not Done" : "DONE"}</button> {todo}</div>
      <button
        onClick={() => {
          setdelete(i);
          fun();
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Todoinput;
