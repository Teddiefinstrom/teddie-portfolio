import './assets/scss/App.scss'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className='background-container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App;

