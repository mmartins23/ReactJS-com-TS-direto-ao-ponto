// Router Dom
import { Routes, Route, NavLink, Link } from 'react-router-dom';
// Components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <>
      {/* 1- Setup e configuracao inicial */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* 2. NavLink */}
          <li> <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contato
          </NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
