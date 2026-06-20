import React from 'react'
import {Link} from 'react-router-dom'

function Card({image, title, description, id, deleteBlog}) {
  return (
    <div className="h-85 w-80  shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-2xl" >

      <img src={image} 
      alt=""
      className="h-[60%] w-full rounded-t-[15px] object-cover object-center border-b" />
      
      <h4 className="p-2 font-medium">{title}</h4>
      <p className="">{description}</p>

      <div className="flex gap-4 m-3">

               <Link to={`/blog/${id}`} className="border rounded-[10px] p-2.5 w-2/5 cursor-pointer bg-[#2B68ED] hover:bg-[#1E5AE0] text-[#FFFFFF] font-bold text-[12px]">Read More</Link>
              <Link to={`/edit/${id}`} className="border rounded-[10px] p-2 w-2/5 cursor-pointer bg-[#EEF6F1] text-[#4CAF70] border-[#4CAF70] text-[14px] text-center font-bold">Edit</Link>
            <button onClick={()=>deleteBlog(id)} className="border rounded-[10px] p-1 w-2/5 cursor-pointer bg-[#FDEEEE] text-[#E57373] border-[#E57373] text-[14px] font-bold">Delete</button>
           
           
            </div>
    </div>
  )
}

export default Card