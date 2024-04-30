import { createContext, useState } from "react";

// Context creation
export const MyContext = createContext();

// Provider component that encapsulates its children by providing the context
export const MyContextProvider = ({ children }) => {
    const [message, setMessage] = useState("Initial message");

    // The value that will be passed to the consumers of the context
    const contextValue = {
        message,
        setMessage,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};
