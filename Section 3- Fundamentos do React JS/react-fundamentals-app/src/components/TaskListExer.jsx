const TaskListExer = ({ tasks }) => {
    return (
        <div>
            <h2>Exer 3</h2>
            {tasks.length === 0 ? (
                <p>No tasks</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>{task.text}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TaskListExer;