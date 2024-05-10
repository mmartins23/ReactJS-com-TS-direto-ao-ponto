import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(`The username ${username} has able to login.`);

        navigate("/");
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit ={handleLogin}>
                <input
                    type="text"
                    placeholder="Insert your username"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                    <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Login