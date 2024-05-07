import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
import emptyIcon from "../../assets/empty.svg";

const Tasks = ({ tasks, handleUpdateTask, handleRemoveTask }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      {tasks.length > 0 ? (
        <ul data-cy="tasks" className={styles.tasks}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleUpdateTask={handleUpdateTask}
              handleRemoveTask={handleRemoveTask}
            />
          ))}
        </ul>
      ) : (
        <div data-cy="tasks-empty" className={styles.empty}>
          <img src={emptyIcon} alt="" />
          <b>Empty Lists</b>
          <div>Add more task above</div>
        </div>
      )}
    </>
  );
};

export default Tasks;
