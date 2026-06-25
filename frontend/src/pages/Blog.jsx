import {useState} from "react";
import bgr from "../assets/bgr.png";
import axios from 'axios'

function Blog() {

const [image, setImage] = useState("")

const [title, setTitle] = useState("")

const [description, setDescription] = useState("")

async function bloghandling(e){

  e.preventDefault()

  const formData = new FormData();

  formData.append("image", image);
  formData.append("title", title);
  formData.append("description", description);


let blogdetail = await axios.post("http://localhost:4000/blog",formData)
console.log(blogdetail)
}
  return (
    <div className="min-h w-full relative ">
      <img src={bgr} alt="" className="h-[85%] w-full" />

      <div className="absolute top-2 left-100 border-2 rounded-[10px] my-6">
        <h1 className="text-[20px] font-bold tracking-wide p-4">
          Share Your Ideas With The World.
        </h1>

        <form onSubmit={bloghandling}
          className="p-4 space-y-6 backdrop-blur-md
         bg-white/20 h-105 w-120 rounded-[10px] "
        >
          {/* <input
            type="text"
            className="w-full border rounded-[10px] p-2 outline-none"
            placeholder="Enter Your Image"
          /> */}

          <div className="border-2 border-dashed border-violet-400 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-violet-50 transition">
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-violet-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                />
              </svg>

              <p className="mt-3 font-semibold">Drag & Drop image here</p>

              <p className="text-gray-500 text-sm">or click to upload</p>
            </label>

            <input id="image-upload" type="file" className="hidden"
            onChange={(e)=>setImage(e.target.files[0])} 
            />
          </div>

          <input
            type="text"
            value={title}
            className="w-full border rounded-[10px] p-2 outline-none"
            placeholder="Enter Your Title"
            onChange={(e)=>setTitle(e.target.value)}
          />

          <input
            type="text"
            value={description}
            className="w-full border rounded-[10px] p-2 outline-none"
            placeholder="Enter Your Description"
            onChange={(e)=>setDescription(e.target.value)}
          />

          <div className="flex gap-6 justify-center">
            <button className="border rounded-[5px] p-2 font-bold bg-gray-200 cursor-pointer">Save Blog</button>

          <button className="border rounded-[5px] p-2 bg-violet-500 font-bold cursor-pointer">Pulish Blog</button>
          </div>

       </form>
      </div>
    </div>
  );
}

export default Blog;
