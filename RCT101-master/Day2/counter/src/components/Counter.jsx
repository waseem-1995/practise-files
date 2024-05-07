import React from 'react'
import styles from './style.module.css'

const Counter = () => {
    const [count, setCount] = React.useState(0)

    const increment = (e) => {
        setCount(count + 1)
    }

    const decrement = (e) => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const double = () => {
        setCount(count * 2)
    }

  return (
    <div className='counterBox'>
        <h1>Counter App: <span className={ count%2 === 0 ? styles.green : styles.red}>{count}</span></h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={double}>Double</button>
        <button onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  )
}

export default Counter