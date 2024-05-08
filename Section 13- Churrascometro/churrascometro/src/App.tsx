import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculadora from "./pages/Calculadora";
import Resultado from "./pages/Resultado";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Calculadora />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
