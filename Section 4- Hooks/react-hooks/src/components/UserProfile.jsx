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
