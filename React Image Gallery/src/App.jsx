import { useEffect, useState } from 'react'
import './App.css'
import GalleryCard from "./component/card";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [limit, setlimit] = useState(8)
  const [page, setpage] = useState(1)

  const getData=async()=>{
    try{
    let result= await axios.get(` https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    setData(result.data)    
    }
    catch(error){
    console.log(error);
    }

  }

  useEffect(()=>{
  getData()
  },[page,limit])

  return (
    
    <>
      <nav className='bg-[#fcfcfd] h-[60px] w-[97%] shadow-md flex items-center p-2 rounded-[8px] fixed '>
        <div className="flex items-center gap-3">
          <i class="fa-solid fa-image text-[#7763e2] text-4xl"></i>
          <p className='text-[20px] font-semibold'>Gallery</p>
        </div>
      </nav>
      {console.log(data)
      }

      <div className='flex flex-wrap gap-5 justify-around py-7 mt-14'>
        {data.map((item)=><GalleryCard data={item}/>)}
      </div>

      <footer className='bg-[#fcfcfd] h-[60px] shadow-md flex items-center justify-between p-5 rounded-[8px] text-gray-700'>
        <div className='flex gap-4  items-center'>
          <p>Show</p>
          <select className='px-2 py-1 border border-[#aaacb5] rounded-[8px] outline-[#919dd6] text-black' onChange={(e)=>setlimit(e.target.value)}  >
            <option value="8" >8</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="32">32</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className='flex gap-5'>
          {[1,2,3].map((num)=><button className='border border-[#aaacb5] px-3 py-1 rounded-[8px] cursor-pointer' onClick={()=>setpage(num)}>{num}</button>)}
        </div>
        <div>
          Page 1 of 3
        </div>
      </footer>
    </>
  )
}

export default App
