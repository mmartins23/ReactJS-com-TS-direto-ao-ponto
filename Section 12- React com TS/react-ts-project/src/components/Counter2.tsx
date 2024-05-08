import { useReducer } from "react";
import { counterReducer } from "../reducer/counterReducer";

const Counter2 = () => {
    const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({type: "increment"})}>Increase</button>
        <button onClick={() =>dispatch({type: "decrement"})}>Decrease</button>
    </div>
  )
}

export default Counter2;