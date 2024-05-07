import React from 'react';
import PropTypes from 'prop-types';


//  Single specific task with toggleTodo action passed as a onTodoClick func.
//  also 'text' and 'completed' props are passed
function Todo(props) {
  return (
    <li
      onClick={props.onClick}
      style={{
        textDecoration:
          props.completed ? 'line-through' : 'none',
      }}
    >
      {props.text}
    </li>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
