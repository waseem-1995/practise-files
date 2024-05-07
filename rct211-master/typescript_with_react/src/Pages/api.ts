import axios, { AxiosResponse } from "axios";
import { newTodo_types, todo } from "./todoTypes";

export const getData = async () => {
  console.log("inside todo");
  let result: AxiosResponse<todo[]> = await axios.get(
    `http://localhost:3000/todos`
  );
  return result;
};
export const postData = async (newToDo: newTodo_types) => {
  let res: AxiosResponse<todo> = await axios.post(
    `http://localhost:3000/todos`,
    newToDo
  );
  console.log(res.data);
  return res.data;
  //  return result
};
export const deleteTodo = async (id: number) => {
  return await axios.delete(`http://localhost:3000/todos/${id}`);
  // console.log(res)
  // return res.data
  //  return result
};
export const toggleTodo = async (id: number) => {
  let result1 = await axios.get(`http://localhost:3000/todos/${id}`);
  const newObj = { status: !result1.data.status };
  let result2 = await axios.patch(`http://localhost:3000/todos/${id}`, newObj);
  return result2
  // console.log(res)
  // return res.data
  //  return result
};
