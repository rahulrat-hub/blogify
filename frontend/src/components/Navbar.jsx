import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Navbar() {

    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black" } 
    flex justify-between items-center p-5 rounded-[10px] m-4 shadow-[0_4px_20px_rgba(0,0,0,0.25)]`}> 
     
      <h1 className="text-[18px] font-bold tracking-wide uppercase">Bolgify</h1>
      
      <nav className="flex gap-10 mx-4 font-medium">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="relative">
        <input type="text" placeholder="Search" 
       className="rounded-[10px] h-8 w-50 p-2 border-2 outline-none" />
        <SearchIcon className="absolute top-1 right-1 cursor-pointer" />
      </div>

      <button onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer" > 
    {
        darkMode ?  <LightModeIcon /> : <DarkModeIcon />
    }    
    </button>
    
     </div>
  );
}

export default Navbar;
