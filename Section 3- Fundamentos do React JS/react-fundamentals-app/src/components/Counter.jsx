import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(1);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }
  return (
    <div>
        <h2>useState</h2>
        <p>You have clicked {count} times.</p>
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Counter