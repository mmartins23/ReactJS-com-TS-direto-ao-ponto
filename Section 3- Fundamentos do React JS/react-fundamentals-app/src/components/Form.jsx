import { useState } from "react"

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email);
        setName("");
        setEmail("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <label>{name}</label>

            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <label>{email}</label>
            <button type="submit">Send Form</button>
        </form>
    )
}

export default Form