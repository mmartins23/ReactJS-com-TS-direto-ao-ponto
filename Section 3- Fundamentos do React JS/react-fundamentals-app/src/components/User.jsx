const User = ({ name, age, jobRole }) => {
    return (
        <div>
            <h2>Information about the user:</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Job Role: {jobRole}</p>
        </div>
    )
}

export default User;