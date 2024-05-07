import React, { useState } from "react";
import styles from "./taskApp.module.css";
import { v4 } from "uuid";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import taskData from "./data/tasks.json";

const TaskApp = () => {
  const [tasks, setTasks] = useState(taskData);

  const addTask = (newTask) => {
    let isTaskPresent = tasks.some((task) => task.text === newTask);
    if (newTask && !isTaskPresent) {
      const newTaskObj = {
        id: v4(),
        text: newTask,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTaskObj]);
    }
  };

  const handleUpdateTask = (updatedTask) => {

    let newTasks = tasks.reduce((acc, curr) => {

      if (curr.id === updatedTask.id) {
        acc.push(updatedTask);
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);

    setTasks([...newTasks]);
  };

  const handleRemoveTask = (taskId) => {
    let newTasks = tasks.filter((task) => task.id !== taskId);
    console.log(newTasks);
    setTasks(newTasks);
  };

  
  return (
    <div data-cy="task-app" className={styles.tasks}>
      <TaskHeader tasks={tasks}/>
      <AddTask addTask={addTask} />
      <Tasks
        tasks={tasks}
        handleUpdateTask={handleUpdateTask}
        handleRemoveTask={handleRemoveTask}
      />
    </div>
  );
};

export default TaskApp;
