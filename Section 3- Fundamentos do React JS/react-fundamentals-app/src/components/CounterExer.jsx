import { useState } from "react"

const CounterExer = () => {
    const [count, setCount] =  useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }
  return (
    <div>
        <h2>Exer 2</h2>
        <p>You have clicked {count} times!</p>
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default CounterExer