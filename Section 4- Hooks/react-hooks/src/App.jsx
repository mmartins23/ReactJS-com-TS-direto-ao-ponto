import './App.css'
import Timer from './components/Timer'
import ChildComponent from './components/ChildComponent'
import { MyContextProvider } from './contexts/MyContext'
import ContextValue from './components/ContextValue'
import Counter from './components/Counter'
import useWindowDimensions from './hooks/useWindowDimensions';
import Container from './components/Container';



function App() {
  const { width, height } = useWindowDimensions();

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
      {/* 20. Custom Hook Example */}
      <h2>Custom Hooks Example</h2>
      <p>width: {width}</p>
      <p>height: {height}</p>
      <hr/>
      {/* 21. prop children */}
      <Container>
        <p>Prop children is used here!</p>
      </Container>
    </>
  )
}

export default App
