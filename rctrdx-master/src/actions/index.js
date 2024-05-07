
//  unique id for each of the tasks
let todoId = 0;


//  informs reducer to add a new task
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: todoId++,
  text,
});

//  informs reducer to switch visibility filter to desired one
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

//  informs reducer to toggle state of given task
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
