import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import TextInput from './components/TextInput';

function App() {

  return (
    <>
      <h2>React com TS</h2>
      {/* 1. Functional Components */}
      <Greeting name='John' />
      {/* 2. Hooks com tipos */}
      <Counter />
      {/* 3. Events types  */}
      <TextInput />
    </>
  )
}

export default App;
