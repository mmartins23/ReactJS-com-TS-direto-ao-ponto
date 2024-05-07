// Components
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

// Hooks
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {

    // id, title, done

    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);

    // localStorage
  }

  return (
    <>
      <h1>Task Lists</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
