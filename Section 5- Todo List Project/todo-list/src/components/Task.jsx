const Task = ({ task, onDelete }) => {
    return (
        <li>
            <span>{task.text}</span>
            <button onClick={onDelete}>Remove</button>
        </li>
    )
}

export default Task;