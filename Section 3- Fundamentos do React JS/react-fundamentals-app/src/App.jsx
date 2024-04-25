import './App.css';
// Components
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import ParentComponent from './components/ParentComponent';
import User from './components/User';


function App() {
  
  return (
    <>
      {/* 9.1 Criacao de componente */}
      <Welcome/>
      {/* 9.2 Expressoes em JSX */}
      <Greeting/>
      {/* 10 Hierarquia de components */}
      <ParentComponent/>
      {/* 10 Props */}
      <User name="Alice" age={30} jobRole="Developer" />
      <User name="Bob" age={25} jobRole="Designer" />
    </>
  )
}

export default App
