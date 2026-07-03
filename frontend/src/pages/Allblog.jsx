import { useState, useEffect } from "react";
import axios from 'axios'
import Card from '../components/Card'
import SearchIcon from "@mui/icons-material/Search";

function Allblog() {
  const [blogfetch, setBlogFetch] = useState([]);
    const [search, setSearch] = useState("")
  const [sort, setSort] = useState("latest")
  const [debounceSearch, setDebounceSearch] = useState("")

   
  async function fetchData() {
    try {
      let result = await axios.get(`http://localhost:4000/blogs?search=${search}&sort=${sort}`);
      console.log(result.data);

      if (result.data.success) {
        setBlogFetch(result.data.bloginfo);
      } else {
        console.log(result.data.msg);
      }
    } catch (error) {
      console.log(error);
      alert("NO DATA FOUND");
    }
  }

  useEffect(()=>{
   const timer = setTimeout(()=>{
    setDebounceSearch(search)
   }, 500)

   return () => clearTimeout(timer)
  },[search])

  useEffect(()=>{
    fetchData();
  },[debounceSearch, sort])

  const deleteBlog = async (id) => {
    try{
      await axios.delete(`http://localhost:4000/blog/${id}`);
      alert("Blog Deleted")

      // {update}
      setBlogFetch(
        blogfetch.filter((item)=> item._id !== id)
      )
    } catch (error){
      console.log(error)
    }
  }

  return (
    <div className="bg-white text-black dark:bg-gray-900  border-white dark:text-white">
      <h1 className="text-4xl font-bold text-center">
        Explore Our Blog Collection
      </h1>
      <p className="text-[15px] font-medium text-center p-2">Discover All Our Latest Story And Updates</p>

      <div className="flex justify-center gap-20 ">
       
        <input type="text" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search" 
       className="rounded-[10px] h-8 w-140 p-2 border outline-none relative" />
        <SearchIcon className="absolute top-45 right-95 cursor-pointer" />
      
      <select className="border outline-none rounded-[10px] p-1 font-medium text-[14px]"
      value={sort}
      onChange={(e)=>setSort(e.target.value)}>
        <option value="latest">Latest</option>
        <option value="popular">Popular</option>
      </select>
        </div>
      
      <div className="mt-4 flex gap-x-6 gap-y-6 px-8 py-8 flex-wrap mx-1 border-t ">
       
        {
        blogfetch.map((obj,index)=>(
          <div key={obj._id} className="">
            <Card 
            id={obj._id}
            image={obj.image}
            title={obj.title.slice(0,50)}
            deleteBlog={deleteBlog}
            // description={obj.description}
            />
            
          </div>
        ))
      }
      </div>
    
    </div>
  );
}

export default Allblog;
