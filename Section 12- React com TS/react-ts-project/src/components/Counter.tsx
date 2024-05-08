import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
     console.log(`The count is now: ${count}`);
    })

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
        </div>
    )
}

export default Counter