import { useEffect, useState } from 'react'
import './App.css'
import GalleryCard from "./component/card";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(8)
  const [page, setPage] = useState(1)
  const [buttonActive, setButtonActive] = useState(false)


  const getData = async () => {
    try {
      let result = await axios.get(` https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      setData(result.data)
    }
    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getData()
  }, [page, limit])

  return (

    <>
      <div className="fixed  h-[100px] left-0 right-0 z-50 bg-[#f8f9fd]/70 backdrop-blur-md flex items-center rounded-[8px] ">
        <nav className='bg-[#fcfcfd] h-[60px]  shadow-md flex items-center p-2 rounded-[8px] w-full mx-5 '>
          <div className="flex items-center gap-3">
            <i class="fa-solid fa-image text-[#7763e2] text-4xl"></i>
            <p className='text-[20px] font-semibold'>Gallery</p>
          </div>
        </nav>
      </div>
      {console.log(data)
      }

      <div className='flex flex-wrap gap-5 justify-around py-7 mt-18'>
        {data.length > 0 ? (data.map((item) => <GalleryCard data={item} />)) : (<p className="text-gray-600  font-bold mt-50 ">Loading...</p>)}
      </div>

      <footer className='bg-[#fcfcfd] h-[60px] shadow-md flex items-center justify-between  px-2 py-4 rounded-[8px] text-gray-700 mx-5 sm:px-4'>
        <div className='flex gap-2 text-[12px] font-semibold items-center sm:gap-4 sm:text-[18px]'>
          <p>Show</p>
          <select className='px-2 py-1 border border-[#aaacb5] rounded-[8px] outline-[#919dd6] text-black' onChange={(e) => setLimit(e.target.value)}  >
            <option value="8" >8</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="32">32</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className='flex gap-2 sm:gap-5'>
          {[1, 2, 3].map((num) => <button className={`border border-[#aaacb5] px-3 py-1 rounded-[8px] cursor-pointer ${page === num ? 'bg-[#7762e2] text-white' : ''} `} onClick={() => (setPage(num))}>{num}</button>)}
        </div>
        <div className='text-[12px] font-semibold sm:text-[18px] '>
          Page {page} of 3
        </div>
      </footer>
    </>
  )
}

export default App
