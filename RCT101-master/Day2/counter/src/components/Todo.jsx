import React, { useState } from 'react'

const Todo = () => {
    const [value, setValue] = useState('')
    const[todos, setTodos] = useState([])

    const addTodo = () => {
        setTodos([...todos, {value: value}])
    }

  return (
    <div>
        <h1>Todo App</h1>
        <input type="text" placeholder='Enter Task Here' value={value} onChange = {(e)=>{
            setValue(e.target.value)
        }}/>
        <button onClick={addTodo}>Add Task</button>

        {todos.map((todo) => {
            return(
                <div>{todo.value}</div>
            )
        })}
    </div>
  )
}

export default Todo