import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Authorinfo from '../components/Authorinfo'

function SingleBlog() {

   const {id} = useParams()
  const[blog, setblog] = useState(null)

 async function singlepage(){
    try{
        const innerdetails = await axios.get(`http://localhost:4000/blog/${id}`);
    setblog(innerdetails.data);
    } catch (error){
        console.log(error)
    }
}

const readTime = blog?.description
  ? `${Math.ceil(blog.description.split(" ").length / 200)} min read`
  : "1 min read";

useEffect(()=>{
    singlepage()
},[id]);

return (
    <div>
        {
            blog ? (
                <div className="min-h-screen">
                    
                    <div className="m-7 flex gap-6 relative">
                    <img src={blog.image} alt=""
                    className="h-100 w-120 border" />
                  
                   <div className="flex flex-col gap-5">
                     <h1 className="text-2xl font-bold border-b">{blog.title}</h1>
                    <p className="text-[14px] font-light ">{blog.description}</p>
                   </div>
               
                </div>
                  
                   <div className="absolute bottom-25 left-10 font-bold ">
                    <Authorinfo
                   author="Admin"
                   createdAt={blog.createdAt}
                   readTime={readTime}
                   />
                   </div>
                </div>
            ) : (
                <h1>Loading....</h1>
            )
        }
    </div>
  )
}

export default SingleBlog