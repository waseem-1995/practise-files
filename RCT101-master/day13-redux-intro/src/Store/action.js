import {
  counter_increment,
  counter_decrement,
  counter_addValue,
  counter_subValue,
  counter_multiplyValue,
  counter_divide
} from "./action.types";

export const add = () => ({ type: counter_increment });

export const substract = () => ({ type: counter_decrement });

export const addValue = (value) => ({ type: counter_addValue, payload: value });

export const subValue = (value) => ({ type: counter_subValue, payload: value });

export const multiplyValue = (value) => ({
  type: counter_multiplyValue,
  payload: value,
});

export const divide = (value) => ({type: counter_divide, payload : value})
