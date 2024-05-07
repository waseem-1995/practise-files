import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({tasks}) => {
  // sample values to be replaced
  let totalTask = tasks?.length
  let unCompletedTask = tasks.filter((task) => !task.done).length;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-cy="header-remaining-task">You have {unCompletedTask}</b>
      <b data-cy="header-total-task"> of {totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
