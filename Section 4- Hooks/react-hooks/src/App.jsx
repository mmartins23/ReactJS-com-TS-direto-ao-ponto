import './App.css'
import Timer from './components/Timer'
import ChildComponent from './components/ChildComponent'
import { MyContextProvider } from './contexts/MyContext'
import ContextValue from './components/ContextValue'
import Counter from './components/Counter'

function App() {

  return (
    <>
      {/* 17. useEffect */}
      <h2>Use Effect Example</h2>
      <Timer />
      <hr/>
      {/* 18. useContext */}
      <h2>Context API Example</h2>
      <MyContextProvider>
      <ChildComponent/>
      <ContextValue/>
      </MyContextProvider>
      <hr/>
      {/* 19. useReducer */}
      <h2>useReducer Example</h2>
      <Counter/>
      <hr/>
    </>
  )
}

export default App
