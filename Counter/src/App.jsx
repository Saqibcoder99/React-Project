import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-[100vh] bg-[#e5e5e7] text-[#68738A] '>
      <div className="bg-[#FDFDFD] w-[500px]  h-auto flex flex-col  items-center  px-20 py-10 rounded-3xl" >
        <h3 className='text-[#17213A] text-4xl font-bold mb-3'> Counter App</h3>
        <h2 className='text-5xl my-6'>{count}</h2>
        <button className='w-full h-[40px] flex items-center justify-center text-[18px]  rounded-[8px] text-[#4A4AD8] border border-[#4A4AD8] transition duration-300 flex gap-3.5 font-medium cursor-pointer
           hover:text-white hover:bg-[#4A4AD8] hover:translate-y-1'  onClick={() => { setCount(count - 1) }}>Previous</button>
        <button className='w-full h-[40px] my-1.5 flex items-center justify-center text-[18px]  rounded-[8px] text-[#4A4AD8] border border-[#4A4AD8] 
          flex gap-3.5 font-medium cursor-pointer  hover:text-white hover:bg-[#4A4AD8] hover:translate-y-1 transition duration-300'onClick={() => { setCount(count + 1) }}>Next </button>
        <button className='w-full h-[40px] flex items-center justify-center text-[18px]  rounded-[8px] text-[#4A4AD8] border border-[#4A4AD8] 
          flex gap-3.5 font-medium cursor-pointer  hover:text-white hover:bg-[#4A4AD8] hover:translate-y-1 transition duration-300'onClick={() => { setCount(0) }}>Clear </button>

      </div>
    </div>
  )
}

export default App
