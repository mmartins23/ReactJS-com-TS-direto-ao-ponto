import { useContext } from "react";
import { MyContext } from "../contexts/MyContext"; // Import the context provider

// Component that consumes the context
const ChildComponent = () => {
  // Access the context
  const { message, setMessage } = useContext(MyContext);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("New message")}>
        Update Message
      </button>
    </div>
  );
};

export default ChildComponent;
