import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './pages/Register'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Allblog from './pages/Allblog'
import SingleBlog from './pages/SingleBlog'
import EditBlog from './pages/EditBlog'

function App() {

   const [darkMode, setDarkMode] = useState(false);
   const [token, settoken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"")

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
        <Route path="/register" element={<Register settoken={settoken} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allblog" element={<Allblog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />

        </Routes>
    </div>
  )
}

export default App