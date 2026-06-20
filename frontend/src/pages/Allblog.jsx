import { useState, useEffect } from "react";
import axios from 'axios'
import Card from '../components/Card'

function Allblog() {
  const [blogfetch, setBlogFetch] = useState([]);

  async function fetchData() {
    try {
      let result = await axios.get("http://localhost:4000/blog");
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
    fetchData()
  },[])

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Explore Our Blog Collection
      </h1>
      <p className="text-[15px] font-medium text-center p-2" >Discover All Our Latest Story And Updates</p>
      
      <div className="m-2 flex gap-x-10 gap-y-6 px-8 py-8 flex-wrap mx-15 border-t ">
       
        {
        blogfetch.map((obj,index)=>(
          <div key={obj._id} className="">
            <Card 
            id={obj._id}
            image={obj.image}
            title={obj.title}
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
