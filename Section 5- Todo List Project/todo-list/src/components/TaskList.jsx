import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
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