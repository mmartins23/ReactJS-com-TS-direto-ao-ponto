import React, { useState, useCallback } from "react";

// Button component that only re-renders if its 'onClick' prop changes
const Button = React.memo(({ onClick, children }) => {
    console.log("Button rendered:", children);
    return <button onClick={onClick}>{children}</button>;
});

Button.displayName = 'Button';

// Counter component that uses useCallback to pass an increment function to the button
const CallbackCounter = () => {
    const [counter, setCounter] = useState(0);

    // The 'increment' function is memoized with useCallback
    // It will only be recreated if 'counter' changes
    const increment = useCallback(() => {
        setCounter((prevCounter) => prevCounter + 1);
    }, []);

    return (
        <div>
            <p>Count: {counter}</p>
            {/* Button is a memoized component that only updates if 'increment' changes */}
            <Button onClick={increment}>Increment</Button>
        </div>
    );
};

export default CallbackCounter;
