import { useState } from "react";

const TaskInput = ({ onAddTask }) => {

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(input.trim()) {
            onAddTask(input);
            setInput("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add your task"
                value={input}
                onChange={e => setInput(e.target.value)} />

            <button type="submit">Add</button>
        </form>
    )
}

export default TaskInput