import './App.css'
import Timer from './components/Timer'
import ChildComponent from './components/ChildComponent'
import { MyContextProvider } from './contexts/MyContext'
import ContextValue from './components/ContextValue'
import Counter from './components/Counter'
import useWindowDimensions from './hooks/useWindowDimensions';
import Container from './components/Container';
import UserProfile from './components/UserProfile';
import UseMemoExample from './components/UseMemoExample'



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
      {/* 22. Syncing State with Props */}
      <h2>Syncing State with Props Example</h2>
      <UserProfile userID={1}/>
      <UserProfile userID={5}/>
      <UserProfile userID={9}/>
      <hr/>
      {/* 23 Example useMemo and useCallback */}
      <h2>Example useMemo</h2>
      <UseMemoExample/>
      <hr/>
    </>
  )
}

export default App
