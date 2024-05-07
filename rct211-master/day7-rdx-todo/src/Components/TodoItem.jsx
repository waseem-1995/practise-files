import axios from "axios";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  postFailure,
  postRequest,
  postSuccess,
  todoFailure,
  todoRequest,
  todoSuccess,
} from "../redux/action";
import TodoInput from "./TodoInput";

const TodoItem = () => {
  const { isLoading, todo } = useSelector((store) => {
    return {
      isLoading: store.isLoading,
      todo: store.todos,
    };
  }, shallowEqual);


  const dispatcher = useDispatch();


  const getData = () => {
    dispatcher(todoRequest());
    axios
      .get(`http://localhost:3000/todos`)
      .then((res) => dispatcher(todoSuccess(res.data)))
      .catch((err) => dispatcher(todoFailure()));
  };


  const addToDo = (payload) => {
    dispatcher(postRequest());
    const newTodo = {
      title: payload,
      status: false,
    };
    axios
      .post(`http://localhost:3000/todos`, newTodo)
      .then((res) => dispatcher(postSuccess(res.data)))
      .catch((err) => dispatcher(postFailure()));
  };

  
  console.log(todo);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {isLoading && <h1>Loading.....</h1>}
      <TodoInput addToDo={addToDo} />
      <h1> TODO App </h1>
      {todo.map((el) => (
        <h1 key={el.title}>
          {el.title}
          {"---"}
          {el.status ? "Done" : "pending"}
        </h1>
      ))}
    </div>
  );
};

export default TodoItem;
