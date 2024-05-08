import './App.css';
import BarraFerramentas from './components/BotaoFerramentas';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Greeting from './components/Greeting';
import LoginForm from './components/LoginForm';
import ShoppingList from './components/ShoppingList';
import ShowPosts from './components/ShowPosts';
import TextInput from './components/TextInput';
import { TemaProvider } from './context/TemaContext';

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
      {/* 4. Exer */}
      <LoginForm/>
      {/* 5. Exer 2 */}
      <ShoppingList/>
      {/* 6. useReducer com TS */}
      <Counter2/>
       {/* 7 - Context API com TypeScript  */}
       <TemaProvider>
        <div>
          <BarraFerramentas />
          {/* Outros componentes que consomem o contexto TemaContext também viriam aqui */}
        </div>
      </TemaProvider>
      {/* 8- HTTP Requests com Axios em TS */}
      <ShowPosts/>
    </>
  )
}

export default App;
