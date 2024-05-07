import React from "react";

export default function Button({ handleClick,handleReduce }) {

  return (
    <div>
      <button onClick={handleClick} data-testid="btn-comp">
        Add
      </button>
      <button onClick={handleReduce} data-testid="btn-reduce">
 Reduce
      </button>
    </div>
  );
}
