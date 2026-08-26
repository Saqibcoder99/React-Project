import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='bg-[#fcfcfd] h-[60px] shadow-md flex items-center p-2 rounded-[8px]'>
        <div className="flex items-center gap-3">
          <i class="fa-solid fa-image text-[#7763e2] text-4xl"></i>
          <p className='text-[20px] font-semibold'>Gallery</p>
        </div>
      </nav>
      <footer className='bg-[#fcfcfd] h-[60px] shadow-md flex items-center justify-between p-5 rounded-[8px] text-gray-700'>
       <div className='flex gap-4  items-center'>
        <p>Show</p>
        <select className='px-2 py-1 border border-[#aaacb5] rounded-[8px] outline-[#919dd6] text-black'  >
          <option value="" >8</option>
          <option value="">16</option>
          <option value="">24</option>
          <option value="">32</option>
          <option value="">50</option>
        </select>
       </div>
       <div className='flex gap-5'>
        <button className=' px-3 py-1 rounded-[8px] bg-[#7763e3] text-white cursor-pointer'>1</button>
        <button className='border border-[#aaacb5] px-3 py-1 rounded-[8px] cursor-pointer'>2</button>
        <button className='border border-[#aaacb5] px-3 py-1 rounded-[8px] cursor-pointer'>3</button>
       </div>
       <div>
        Page 1 of 3
       </div>
      </footer>
    </>
  )
}

export default App
