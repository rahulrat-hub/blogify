import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './pages/Register'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {

   const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    
    <div>
       <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App