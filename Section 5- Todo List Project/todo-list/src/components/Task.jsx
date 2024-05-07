const Task = ({ task, onDelete, onToggleTask }) => {
    return (
        <li>
            <span
                onClick={onToggleTask}
                style={{ textDecoration: task.done ? "line-through" : "none" }}>{task.text}</span>
            <button onClick={onDelete}>Remove</button>
        </li>
    )
}

export default Task;