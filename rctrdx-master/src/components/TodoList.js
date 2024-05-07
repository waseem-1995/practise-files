import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


//  presentational component, renders <Todo> components
//  with toggleTodo action passed as a onTodoClick onto each one of them
function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo} //  passes all props of todo
          onClick={() => props.onTodoClick(todo.id)}
        />)
      }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

//  not sure why ESlint says that onTodoClick  is never used as a prop
export default TodoList;
