const Task = ({task}) => {
    return (
        <li>
            <span>{task.text}</span>
            <button>Remove</button>
        </li>
    )
}

export default Task;