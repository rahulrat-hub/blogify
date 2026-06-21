import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Navbar({ darkMode, setDarkMode }) {


    return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white flex justify-between items-center p-5 rounded-[10px] m-4 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"> 
     
      <h1 className="text-[18px] font-bold tracking-wide uppercase">Bolgify</h1>
      
      <nav className="flex gap-10 mx-4 font-medium">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
         <Link to="/allblog">Allblog</Link>
      </nav>

      <button onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer" > 
    {
        darkMode ?  <LightModeIcon /> : <DarkModeIcon />
    }    
    </button>
    
     </div>
  );
}

export default Navbar;
