import { useState } from "react"

const FormEvents = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Forms in React</h2>
            <input type="text" value={value} placeholder="Value" onChange={handleChange} />
            <button>Send</button>
        </form>
    )
}

export default FormEvents