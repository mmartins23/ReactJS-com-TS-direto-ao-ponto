import { FormEvent, useState } from "react";

const LoginForm = () => {

    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(`Login: User: ${user} - Password : ${password}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="user">User:</label>
            <input type='text' value={user} onChange={e => setUser(e.target.value)} />

            <label>Password:</label>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Send Form</button>
        </form>
    )
}

export default LoginForm