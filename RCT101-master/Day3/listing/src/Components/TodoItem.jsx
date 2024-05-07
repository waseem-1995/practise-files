import React from 'react'


const TodoItem = ({value, deleteTodo}) => {
  return (
  <div className='list'>
      <h2 style={{fontWeight:"lighter"}}>{value}</h2>
      <button onClick={() => deleteTodo(value)}>x</button>
  </div>
  )
};

export default TodoItem