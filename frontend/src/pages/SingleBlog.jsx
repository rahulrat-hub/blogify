import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

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

useEffect(()=>{
    singlepage()
},[id]);

return (
    <div>
        {
            blog ? (
                <div className="">
                    <img src={blog.image} alt="" />
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                </div>
            ) : (
                <h1>Loading....</h1>
            )
        }
    </div>
  )
}

export default SingleBlog