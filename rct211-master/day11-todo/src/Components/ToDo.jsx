import React, { memo } from "react";

const     heavy = ()=>{
    let start = Date.now()
    while(Date.now()-start  < 200) continue;
}
export const ToDo= memo(({ title, id, status,handleDelete,handleToggle }) => {
    heavy()
  return (
    <div>
      {/* <h1>ToDo</h1> */}
      <h1>{title}</h1>
      <h1>{status ? "completed" : "Not Yet"}</h1>
      <button onClick={()=>handleToggle(id)}>Toggle</button>
      <button onClick={()=>handleDelete(id)}>Delete</button>
      <hr />
    </div>
  );
})
