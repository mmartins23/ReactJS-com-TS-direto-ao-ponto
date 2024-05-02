import { useState, useMemo } from "react";
import ListNames from "./ListNames";


const UseMemoExample = () => {
    const [count, setCount] = useState(0);
    const [names] = useState(["Ash", "Bob", "Chi"]);
  
    const listWithNoRender = useMemo(() => <ListNames list={names} />, [names]);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase by 1
      </button>
      {/* Add useMemo here */}
      {listWithNoRender}
    </div>
  )
}

export default UseMemoExample