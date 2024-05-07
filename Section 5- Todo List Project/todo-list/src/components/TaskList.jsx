import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {

    if (tasks.length === 0) {
        return <p>There are no tasks!</p>
    }
    return (
        <ul>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={() => onDeleteTask(task.id)}
                    onToggleTask={() => onToggleTask(task.id)} />
            ))}
        </ul>
    )
}

export default TaskList;