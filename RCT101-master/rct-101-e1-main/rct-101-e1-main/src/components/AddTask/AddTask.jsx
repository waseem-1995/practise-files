import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({addTask}) => {
  const [newtask, setnewTask] = useState("");
  // NOTE: do not delete `data-cy` key value pair
  const handleInput = () => {
    addTask(newtask);
    setnewTask("");
  };

  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        onChange={(e) => setnewTask(e.target.value)}
        value={newtask}
      />
      <button data-cy="add-task-button" onClick={handleInput}>+</button>
    </div>
  );
};

export default AddTask;
