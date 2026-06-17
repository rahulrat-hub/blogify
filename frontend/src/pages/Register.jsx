import { useState } from "react";
import bg from "../assets/bg.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function Register() {
  const [username, setUsername] = useState("");

  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [status, setStatus] = useState(false);

  return (
    <div className="flex p-4">
      {/* {LEFT}   */}

      <div className="left h-130 w-full relative rounded-l-[10px]">
        <img
          src={bg}
          alt="mountain-image"
          className="h-full object-center object-cover rounded-l-[10px]"
        />

        <div className="absolute top-0 w-full p-2">
          <h1 className="text-2xl font-bold px-8 py-2">
            Join MyBlog Community.
          </h1>

          <p className="text-[14px] text-center p-3 font-medium">
            Discover valuable articles, expert insights, and trending topics
            curated by our dedicated admin team. Stay informed and explore
            high-quality content across multiple categories.
          </p>

          {/* {1} */}
          <div className="flex w-2/3 gap-2 px-10 py-4">
            <MenuBookIcon className="scale-140" />

            <div className="text-[15px] flex flex-col gap-1">
              <h1 className="font-bold">Read Quality Content</h1>
              <p className="font-medium">
                Explore well-researched blogs written and managed by our admin
                team across multiple companies
              </p>
            </div>
          </div>
          {/* {2} */}
          <div className="flex w-2/3 gap-2 px-10 py-4">
            <BookmarkIcon className="scale-140" />

            <div className="text-[15px] flex flex-col gap-1">
              <h1 className="font-bold">Save & Organize</h1>
              <p className="font-medium">
                Bookmark your favorite articles and create your personal reading
                collection for quick and easy access anytime.
              </p>
            </div>
          </div>

          {/* {3} */}

          <div className="flex w-2/3 gap-2 px-10 py-6">
            <BookmarkIcon className="scale-140" />

            <div className="text-[15px] flex flex-col gap-1">
              <h1 className="font-bold">Engage & Connect</h1>
              <p className="font-medium">
                Share your thoughts through comments, participate in
                discussions, and become part of a growing community of readers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* {LEFT END} */}

      {/* {RIGHT} */}
      <div className="right h-130 w-full border rounded-r-[10px]">
        <h1 className="text-2xl font-bold tracking-wide px-4 py-4">
          Create Your Account
        </h1>

        <p className="font-medium text-[14px] px-4">
          Fill in the details below to get started.
        </p>

        <form className="space-y-6 m-8">
          <input className="w-full p-2 outline-none border rounded-[10px]"
          type="text" placeholder="Enter Your UserName" />

          <input className="w-full p-2 outline-none border rounded-[10px]"
          type="text" placeholder="Enter Your Name" />

          <input className="w-full p-2 outline-none border rounded-[10px]"
          type="text" placeholder="Enter Your Password" />

         <label className="flex gap-2 font-medium">
          <input type="checkbox" 
          className="scale-150" />
          Remember me
         </label>

         <button className="w-full border p-2 font-bold rounded-[10px] cursor-pointer bg-blue-600 text-white">Register</button>

         <p className="flex justify-between font-medium text-[17px]">Already have an account? <button className="underline underline-offset-1 cursor-pointer">Login</button> </p>

        </form>
      </div>
      {/* {RIGHT END} */}
    </div>
  );
}

export default Register;
