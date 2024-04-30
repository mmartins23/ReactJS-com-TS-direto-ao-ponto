import  { useContext } from "react";
import { MyContext } from "/src/contexts/MyContext"; // Adjust the import path according to the location of your context file

const ContextValue = () => {
  // Use useContext to access the current value of the MyContext context
  const { message } = useContext(MyContext);

  return <div>The context value is: {message}</div>;
};

export default ContextValue;
