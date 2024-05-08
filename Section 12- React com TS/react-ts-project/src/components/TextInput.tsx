import { ChangeEvent, FormEvent, useState } from "react"

const TextInput = () => {
    const [text, setInput] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setInput("");
        console.log('Form was sent!')
    }

    return (
        <form onClick={handleSubmit}>
            <input type='text' value={text} onChange={handleChange} />
            <p>{text}</p>
            <button>Send</button>
        </form>
    )
}

export default TextInput