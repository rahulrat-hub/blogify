import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CopyrightIcon from '@mui/icons-material/Copyright';


function Footer() {
    return (
      <div className="h-70 rounded-[10px] border mx-2 mt-4">
         <div className="upper flex gap-20">
        <div className="w-2/12">
          <h1 className="font-bold text-2xl p-4">Bolgify</h1>
          <p className="font-medium text-[14px] px-4">
            Discover insightful article, stay updated with the latest trends and
            explore content curated by experts writers.
          </p>
        </div>

        <div className="px-4 py-2">
          <h1 className="font-bold text-[20px]">Quick Links</h1>
          <nav className="flex gap-5 p-2 font-medium flex-col">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="px-4 py-2">
          <h1 className="text-[20px] font-bold">Contact Infos</h1>

          <div className="flex gap-2 px-2 py-2 font-medium m-2">
            <EmailIcon />
            <p>rahulraturi84@gmail.com</p>
          </div>

          <div className="flex gap-2 px-2 py-4 font-medium">
            <CallIcon />
            <p>+91-123456789</p>
          </div>

          <div className="flex gap-2 px-2 py-4 font-medium">
            <LocationOnIcon />
            <p>Rishikesh, Gumaniwala</p>
          </div>
        </div>

        <div className="">
            <h1 className="text-[20px] font-bold m-2">Community</h1>
            <p className="font-medium p-2">Create Account</p>
            <p className="font-medium p-2">Sign-in</p>
            <p className="font-medium p-2">Bookmark Article</p>
            <p className="font-medium p-2">Newsletter</p>
        </div>
      </div>

      <div className="lower border-t flex gap-2 justify-center p-4">
<CopyrightIcon />
<p>2026 All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
