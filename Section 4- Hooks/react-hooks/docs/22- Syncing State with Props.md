# Syncing State with Props


```javascript
import { useEffect, useState } from "react";

const UserProfile = ({ userID }) => {
    // State to hold the user data
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Function to fetch user data
        const searchUsers = async () => {
            // Fetch user data from the API
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userID}`
            );
            // Parse response data
            const userData = await res.json();
            // Update the user state with the fetched data
            setUser(userData);
        };

        // Check if userID exists before fetching user data
        if (userID) {
            searchUsers(); // Call the searchUsers function
        }
    }, [userID]); // Dependency array, useEffect runs when userID changes

    return (
        <div>
            {/* Render user data if available, otherwise show loading message */}
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>Loading User Profile ..</p>
            )}
        </div>
    );
};

export default UserProfile;
```

1. **Importing useState and useEffect**:
   - This line imports the `useState` and `useEffect` hooks from the React library. These hooks are used for managing state and performing side effects in functional components.

2. **UserProfile component**:
   - This is a functional component named `UserProfile` that takes a `userID` prop as input.

3. **State declaration**:
   - Inside the component, it declares a state variable `user` using the `useState` hook. Initially, the value of `user` is `null`.

4. **useEffect hook**:
   - The `useEffect` hook is used to perform side effects in functional components. In this case, it is fetching user data from an API when the `userID` prop changes.
   - It takes a callback function as its first argument, which is executed after the component is rendered or when its dependencies change.
   - Inside the callback function, there's a conditional check to ensure that the `userID` exists before fetching user data.
   - If `userID` exists, it calls the `searchUsers` function to fetch user data.

5. **Fetching user data**:
   - The `searchUsers` function is an asynchronous function that fetches user data from the JSONPlaceholder API using the `fetch` API.
   - It constructs the URL based on the `userID` prop passed to the component.
   - After fetching the data, it parses the JSON response using the `json()` method.
   - Finally, it updates the `user` state with the fetched data using the `setUser` function.

6. **Rendering**:
   - The component returns JSX to render user data if available, otherwise, it displays a loading message.
   - If `user` is not `null`, it renders the user's name and email inside a `<div>`.
   - If `user` is `null`, it renders a "Loading User Profile .." message inside a `<p>` element.

7. **Exporting**:
   - The `UserProfile` component is exported as the default export from the module. This allows other components to import and use it.