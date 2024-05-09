import "./App.css";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";

function App() {
  return (
    <Router>
      {/* 1- Get com Fetch e Axios */}
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">Fetch Posts</Link>
        <Link to="/axios-posts">Axios Posts</Link>
      </div>
      <Routes>
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />
      </Routes>
    </Router>
  )
}

export default App
