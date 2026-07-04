import React from "react";
import hero2 from "../assets/hero2.png";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ChatIcon from "@mui/icons-material/Chat";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupIcon from "@mui/icons-material/Group";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Marquee from './Marquee'
import {useNavigate} from 'react-router-dom'


function Hero() {
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="min-h w-full p-4 flex gap-20">
      <div className="left w-160 ml-8">
        <p className="text-[14px] font-medium inline-flex mx-4 p-2 rounded-2xl bordre bg-[#EFEEFE] text-[#2F2E86]">
          Welcome to blogify
        </p>
        <h1 className="text-4xl leading-12 tracking-wide font-bold p-4">
          Discover Stories Ideas & Knowledge
        </h1>
        <p className="text-[16px] font-light mx-4">
          Explore insight articles, trending topics, expert perpectives writers
          ariund the world
        </p>

        <div className="flex m-4 gap-2 ">
          <button onClick={()=>navigate("/allblog")} className="text-[14px] font-medium border p-2 rounded-[5px] bg-black text-white cursor-pointer">
            Explore Blogs
          </button>

          <button onClick={()=>navigate("/blog")} className="text-[14px] font-medium border p-2 rounded-[5px] cursor-pointer">
            Start Blogs
          </button>
        </div>

        <div className="border-t flex gap-4 py-6 border-b">
          <div className="flex gap-2">
            <span className="border rounded-[50%] px-2 py-1 h-10 w-10 bg-[#EFF6FF] text-[#2563EB]">
              <ImportContactsIcon />
            </span>
            <div className="">
              <h4 className="font-medium ">Quality Content</h4>
              <p className="text-[12px] w-25">
                Well research and insightful article
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="border rounded-[50%] px-2 py-1 h-10 w-10 bg-[#ECFDF5] text-[#10B981]">
              <GroupAddIcon />
            </span>
            <div className="">
              <h4 className="font-medium">Expert Writers</h4>
              <p className="text-[12px] w-25">Articles from industry experts</p>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="border rounded-[50%] px-2 py-1 h-10 w-10 bg-[#FEF3C7] text-[#F59E0B]">
              <ChatIcon />
            </span>
            <div className="">
              <h4 className="font-medium">Engaged Community</h4>
              <p className="text-[12px] w-25">
                Join discussions and your thoughts
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 my-10 border p-4 rounded-[10px]">
          <div className="flex">
            <span className="border rounded-[50%] px-2 py-1 h-10 w-10 bg-[#EFEEFE]  text-[#2F2E86]">
              <DescriptionIcon />
            </span>
            <div className="mx-2">
              <p className="text-2xl">500+</p>
              <p className="text-[14px] font-bold">Articles </p>
            </div>
          </div>

          <div className="flex">
            <span className="border rounded-[50%] px-2 py-1 h-10 w-10 bg-[#FCE7F3] text-[#EC4899]">
              <GroupIcon />
            </span>
            <div className="mx-2">
              <p className="text-2xl">10k+</p>
              <p className="text-[14px] font-bold">Readers</p>
            </div>
          </div>

          <div className="flex">
            <span className="border rounded-[50%] px-2 py-1 h-10 w-10 bg-[#FEF3C7] text-[#F59E0B]">
              <VisibilityIcon />
            </span>
            <div className="mx-2">
              <p className="text-2xl">50k</p>
              <p className="text-[14px] font-bold">Page views</p>
            </div>
          </div>
        </div>
     
      </div>

      <div className="right w-140 mr-20">
        <img src={hero2} alt="" className="w-full " />
      </div>
      
    </div>

<Marquee 
     title="BUILD . LEARN . CODE . GROW . REPEAT" />


    </div>

  );
}

export default Hero;
