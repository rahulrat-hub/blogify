import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Navigate} from 'react-router-dom'

function EditBlog() {
  const user = JSON.parse(localStorage.getItem("user"))

  if(user?.role !== "admin"){
    return <Navigate to="/" />;
  }


  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function EditDataFetch() {
    try {
     
 let editdata = await axios.get(`http://localhost:4000/blog/${id}`);
      
      setTitle(editdata.data.title);
      
      setDescription(editdata.data.description);
    } catch (error) {
      console.log(error);
    }
  }

async function UpdateBlog(){
  const token = localStorage.getItem("token")
    await axios.put(`http://localhost:4000/blog/${id}`,{
        title,
        description,
    }, {headers : {Authorization : `Bearer ${token}`}})
alert("Updated Blog")
  }

  useEffect(() => {
    EditDataFetch();
  }, [id]);

  return (
    <div className="p-10 bg-white text-black dark:bg-gray-900 dark:text-white">
      {" "}
      <h1 className="text-2xl font-bold mb-5">Edit Blog</h1>{" "}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 w-full mb-4"
      />{" "}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 w-full mb-4"
      />{" "}
      <button
        onClick={UpdateBlog}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {" "}
        Update Blog{" "}
      </button>{" "}
    </div>
  );
}

export default EditBlog;
