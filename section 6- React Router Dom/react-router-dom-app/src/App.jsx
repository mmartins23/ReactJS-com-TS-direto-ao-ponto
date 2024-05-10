// Router Dom
import { Routes, Route, NavLink, Link } from 'react-router-dom';
// Components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import TaskDetails from "./components/TaskDetails";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";


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
          {/* 3. useNavigate */}
          <li><Link to="/login">Login</Link></li>

          {/* 5. Rotas aninhadas */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* 4 Roteamento dinâmico */}
      <div>
        <h2>Tarefas</h2>
        <Link to={`/tasks/1`}>Tarefa 1</Link>
        <Link to={`/tasks/2`}>Tarefa 2</Link>
        <Link to={`/tasks/3`}>Tarefa 3</Link>
      </div>

      {/* 6. 404 */}
      <div>
        <h2>Itens</h2>
        <Link to={`/items/1`}>Item 1</Link>
        <Link to={`/items/2`}>Item 2</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* 3. useNavigate() hook */}
        <Route path='/login' element={<Login />} />
        {/* 4 Roteamento dinâmico */}
        <Route path="/tasks/:taskId" element={<TaskDetails />} />

        {/* 5 Rotas aninhadas */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          {/* Rotas aninhadas para o Dashboard */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />

          {/* 6 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
